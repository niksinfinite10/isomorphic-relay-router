import React,{Component} from 'react';
import Relay from 'react-relay';

class SinglePhoto extends Component {
  render(){
    return(
      <div>
        <img  data-width={`${this.props.post.imageUrlList[0].width}`} data-height={`${this.props.post.imageUrlList[0].height}`} data-action="zoom" src={`${this.props.post.imageUrlList[0].url}`} />
      </div>
    );
  }
}


export default Relay.createContainer(SinglePhoto, {

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
