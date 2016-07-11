import React,{Component} from 'react';
import Relay from 'react-relay';

class Comment extends Component{

  render(){
    console.log('rendering Comment');
    return(
        <li className="list-group-item">
          <div className="media-left">
            <ul className="avatar-list">
              <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-fat.jpg" /></li>
            </ul>
          </div>
          <div className="media-body">
              <small className="pull-right text-muted">34 min</small>
              <div className="media-heading">
              <a href="#"><strong>Fat</strong></a>
                This is comment section...
          </div>
        </div>
      </li>
    );
  }
}

export default Comment;
