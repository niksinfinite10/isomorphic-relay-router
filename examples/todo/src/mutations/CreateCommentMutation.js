/*
* Nikhil Surti 04/19/2016
*
*/
import Relay from 'react-relay';
// import {currentTime} from '../../common/AuthHelper';

export default class CreateCommentMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL `mutation{createComment}`;
  }

  getFatQuery() {
    return Relay.QL `
    fragment on CreateCommentPayload{
          post {commentCount},
          commentEdge{
            node{
              comment,
              postId,
              user{
                id,
                diet,
                profileImageUrl,
                displayName
              },
              since
            }
          }
            }`;
      }

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'post',
      parentID: this.props.comment.postId,
      connectionName: 'comments',
      edgeName: 'commentEdge',
      rangeBehaviors: {
        // Prepend the comment, wherever the connection is sorted by age
        '': 'prepend',
      },
    }];
  }

  getVariables() {
    return {
      comment: this.props.comment.comment,
      postId: this.props.comment.postId
    }
  }

  getOptimisticResponse() {
      // console.log("Optimistic Response", this.props.comment, this.props.user);
      return {
        post:{
          commentCount: this.props.commentCount + 1
        },
        commentEdge: {
          node: {
            comment: this.props.comment.comment,
            postId: this.props.comment.postId,
            user: this.props.user,
            since: 'now'
          }
        },

      };


  }
}
