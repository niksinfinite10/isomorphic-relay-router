import React,{Component} from 'react';
import Relay from 'react-relay';
import Comment from './Comment';
import CreateCommentMutation from '../mutations/CreateCommentMutation';

class CommentList extends Component{
  renderRow(){
    let row = [];
    console.log('this is renderRow',this.props.node.comments);
    this.props.node.comments.edges.map((comment) => {
      row.push(<Comment comment={comment.node} key={comment.node.id} />);
    });
     return row;

  }


 uniCharCode(event) {
   if(event.which === 13)
   {

     console.log('this is input text',this._input.value);
     let mutationInput = {
      comment: {
        comment: this._input.value,
        postId: this.props.node.id,

      },
      //ToDo:add the current user object in the mutation
      user:{
          id: "VXNlcjoxNQ==",
          diet: "VEGETARIAN",
          displayName: "Nikhil Surti",
          profileImageUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/13327473_10204788630873929_2594466919174112298_n.jpg?oh=eaefbd37cd4c35c39a0ce53d4e92ea58&oe=57F4B1FA"

        },

      commentCount:this.props.node.commentCount

    };
    // console.log("Mutation input", mutationInput);

    this.props.relay.commitUpdate(new CreateCommentMutation(mutationInput), {
      onSuccess: data => {

        console.log("Comment Mutation Data recieved ", data);

      },
      onFailure: err => {
        console.log("Unable to coment", err);
      }
    });
   }
}

//  uniKeyCode(event) {
//     // var key = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
//     // document.getElementById("demo2").innerHTML = "Unicode KEY code: " + key;
//     console.log('rhis key code is ',event.which);
// }

  render(){
    console.log('rendering CommentList');

    return(
        <ul className="media-list m-b">
          <li>
            <div className="media-left">
              <ul className="avatar-list">
                <li className="avatar-list-item"><img className="img-circle" src='/img/avatar-dhg.png' /></li>
              </ul>
            </div>
            <div className="media-body">
                <div className="media-heading">
                <input type="text" className="form-control" placeholder="Write a Comment..." onKeyPress={this.uniCharCode.bind(this)}  ref={(c) => this._input = c} />
                </div>
            </div>
          </li>
            {this.renderRow()}
        </ul>

    );
  }
}

// export default CommentList;
export default  Relay.createContainer(CommentList, {
  // initialVariables: {
  //   count: 15,
  // },

  fragments: {
    node: () => Relay.QL `
        fragment on Post{
             id,
             commentCount,
                comments(first:5){
                edges{
                    node{
                        ${Comment.getFragment('comment')}

                    }
                }
              },
          }`
  }
});
