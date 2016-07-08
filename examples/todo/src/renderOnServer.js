import IsomorphicRouter from 'isomorphic-relay-router';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match,RouterContext } from 'react-router';
import Relay from 'react-relay';
import routes from './routes';

// const GRAPHQL_URL = `https://graph.veg.me`;
const GRAPHQL_URL = `http://localhost:8080/graphql`;

const networkLayer = new Relay.DefaultNetworkLayer(GRAPHQL_URL);

export default (req, res, next) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    // console.log('redirection location is ',req.url);
    if (error) {
      next(error);
    } else if (redirectLocation) {
      console.log('this is redirectionLocation');
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
        console.log('this is renderprops condition');
        IsomorphicRouter.prepareData(renderProps, networkLayer).then(render, next);


    } else {
      console.log('this is 404');
      res.status(404).send('Not Found');
    }

    function render({ data, props }) {
      const reactOutput = ReactDOMServer.renderToString(IsomorphicRouter.render(props));
      res.render(path.resolve(__dirname, '..', 'views', 'index.ejs'), {
        preloadedData: data,
        reactOutput
      });
    }
  });
};
