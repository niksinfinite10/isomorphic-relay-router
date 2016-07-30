/*
* Nikhil Surti 04/19/2016
*
*/
import Relay from 'react-relay';

export default class DeleteCommentMutation extends Relay.Mutation {
  static fragments = {
    comment: () => Relay.QL `
        fragment on Comment {id}`,
  };

  getMutation() {
    return Relay.QL `mutation{deleteComment}`;
  }

  getFatQuery() {
    return Relay.QL `
      fragment on DeleteCommentPayload{
        post{commentCount},
        deletedId,
      }`;
  }

  getConfigs() {
     return [{
        type: 'NODE_DELETE',
        parentName: 'post',
        parentID: this.props.postId,
        connectionName: 'comments',
        deletedIDFieldName: 'deletedId',
      }
    ];
 }

 getVariables() {
    return {
      commentId: this.props.commentId
    };
  }

  getOptimisticResponse() {
    return{
      postId: this.props.postId,
      deletedId:this.props.commentId
    }
  }


}
