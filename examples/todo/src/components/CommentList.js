import React,{Component} from 'react';
import Relay from 'react-relay';
import Comment from './Comment';


class CommentList extends Component{
  renderRow(){
    let row = [];
    console.log('this is renderRow',this.props.node.comments);
    this.props.node.comments.edges.map((comment) => {
      row.push(<Comment comment={comment.node} key={comment.node.id} />);
    });
     return row;

  }
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
                <input type="text" className="form-control" placeholder="Comment..." />
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
