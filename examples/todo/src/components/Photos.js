/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';
import {IndexLink, Link} from 'react-router';
import Relay from 'react-relay';

class Row extends Component {
  render(){
    return(
      <div>
        <img  data-width={`${this.props.post.imageUrlList[0].width}`} data-height={`${this.props.post.imageUrlList[0].height}`} data-action="zoom" src={`${this.props.post.imageUrlList[0].url}`} />
      </div>
    );
  }
}


class  Photos extends Component {

renderRow(){
  let rowPost =[];
    this.props.post.edges.map((post) => {
        rowPost.push(<Row post={post.node} key={post.node.id}  />);
    });

    return rowPost;
}

  render(){


  return (

    <div className="panel panel-default visible-md-block visible-lg-block">
     <div className="panel-body">

       <h5 className="m-t-0">Photos <small>· <Link to="/notifications" activeClassName="selected" className="alert-link" >Edit</Link> </small></h5>

       <div data-grid="images" data-target-height="150">
          {this.renderRow()}
       </div>
     </div>
       </div>



  );
  }
}


export default Relay.createContainer(Photos, {
  fragments: {
  post: () => Relay.QL `
      fragment on Post {
          id,
          title,
          likeCount,
          userHasLiked,
          description,
          imageUrlList(width:500){
            url,
            width,
            height
          },
          diet,
          since,
          user{
            id,
            diet,
            profileImageUrl
            displayName,
          },
          commentCount,

        }`
},
});

// export default Photos;
