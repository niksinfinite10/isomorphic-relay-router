import React,{Component} from 'react';
import Relay from 'react-relay';

class Comment extends Component{

  render(){
    console.log('rendering Comment');
    return(
        <li className="list-group-item">
          <div className="media-left">
            <ul className="avatar-list">
              <li className="avatar-list-item"><img className="img-circle" src={this.props.comment.user.profileImageUrl} /></li>
            </ul>
          </div>
          <div className="media-body">
              <small className="pull-right text-muted">{this.props.comment.since}</small>
              <div className="media-heading">
              <a href="#"><strong>{this.props.comment.user.fName} </strong></a>
                {this.props.comment.comment}
          </div>
        </div>
      </li>
    );
  }
}



 export default Relay.createContainer(Comment, {
  fragments: {
    comment: () => Relay.QL `
      fragment on Comment{
              id,
              comment,
              since,
              user{
                id,
                fName,
                profileImageUrl,
                displayName
              }
          }`
      }
});
