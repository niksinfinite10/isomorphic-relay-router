import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import renderOnServer from './renderOnServer'
import {schema} from './data/schema';

const APP_PORT = 8080;

var app = express();

// Expose a GraphQL endpoint
app.use('/graphql', graphQLHTTP({schema, pretty: true}));

// app.use(express.static(path.join(__dirname, 'public/assets')));
// Serve CSS
app.use('/css/', express.static(path.resolve(__dirname, '../public/assets', 'css')));

app.use('/img/', express.static(path.resolve(__dirname, '../public/assets', 'img')));
// app.use('/js/', express.static(path.resolve(__dirname, '../public/assets', 'js')));


// Serve JavaScript
app.get('/app.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile('app.js', {root: __dirname});
});

// Serve HTML
app.get('/*', (req, res, next) => {
    renderOnServer(req, res, next);
});

app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});
