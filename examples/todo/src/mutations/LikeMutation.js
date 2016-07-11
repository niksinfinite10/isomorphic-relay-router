/*
* Nikhil Surti 04/19/2016
*
*/
import Relay from 'react-relay';

export default class LikeMutation extends Relay.Mutation {

  static fragments = {
    post: () => Relay.QL `
      fragment on Post {
        id,
        userHasLiked,
        likeCount
      }
      `,
  };
  getMutation() {
    return Relay.QL `mutation{toggleLikePost}`;
  }
  getFatQuery() {
    return Relay.QL `
      fragment on ToggleLikePostPayload{
              post{
                likeCount,
                userHasLiked,
                id
              }
            }`;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        post: this.props.post.id,
      },
    }];
  }

  getVariables() {

    return {
      postId: this.props.post.id,
      userHasLiked: !this.props.post.userHasLiked
    };
  }

  getOptimisticResponse() {
    let newCount = this.props.post.likeCount + 1;
    if (this.props.post.userHasLiked) {
      newCount = this.props.post.likeCount - 1;
    }
    return {
      post: {
        likeCount: newCount,
        userHasLiked: !this.props.post.userHasLiked,
        id: this.props.post.id
      }
    };
  }
}
