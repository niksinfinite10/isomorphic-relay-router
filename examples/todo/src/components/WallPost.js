import React,{Component} from 'react';

import Relay from 'react-relay';

class WallPost extends Component{
  render(){
    console.log('render method of Post',this.props.post);

    return (
       <li className="media list-group-item p-a">
          <a className="media-left" href="#">
            <img
              className="media-object img-circle"
              src={`${this.props.post.user.profileImageUrl}`} />
          </a>
          <div className="media-body">
            <div className="media-heading">
              <small className="pull-right text-muted"> {this.props.post.since}</small>
              <h5>{this.props.post.user.displayName}</h5>
            </div>
            <p>{this.props.post.title}</p>
            <div className="media-body-inline-grid" data-grid="images">
              <div>
                <img data-action="zoom" data-width={`${this.props.post.imageUrlList[0].width}`} data-height={`${this.props.post.imageUrlList[0].height}`} src={`${this.props.post.imageUrlList[0].url}`} />
              </div>
            </div>
          </div>


        </li>

    );
  }
}

export default Relay.createContainer(WallPost, {

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
