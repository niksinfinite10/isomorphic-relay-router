/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';
import {IndexLink, Link} from 'react-router';
import Relay from 'react-relay';
import SinglePhoto from './SinglePhoto';



class  PostPhotos extends Component {

renderRow(){
  let rowPost =[];
  console.log('renderrow of postphotots',this.props.userPosts);
    this.props.userPosts.posts.edges.map((post) => {
        rowPost.push(<SinglePhoto post={post.node} key={post.node.id}  />);
    });

    return rowPost;
}

  render(){


  return (

    <div className="panel panel-default visible-md-block visible-lg-block">
     <div className="panel-body">
      <h5 className="m-t-0">Photos <small>· <Link activeClassName="selected" className="alert-link"  to="/notifications" >More</Link>  </small></h5>
      <div data-grid="images" data-target-height="150">
          {this.renderRow()}
       </div>
     </div>
       </div>



  );
  }
}


export default Relay.createContainer(PostPhotos, {

  fragments: {
    userPosts: () => Relay.QL `
      fragment on User {
        id,
        posts(first:10){
          pageInfo{
            hasNextPage
          },
          edges{
            node{
                id,
                ${SinglePhoto.getFragment('post')},
              }
          }
        }
      }
    `,
  }
});

// export default Photos;
