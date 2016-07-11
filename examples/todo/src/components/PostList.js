/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';
import Relay from 'react-relay';
import WallPost from './WallPost';

class PostList  extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
  }

  renderRow(){
      let rows = [];
      this.props.userFeed.feed.edges.map( (post) => {
        rows.push(<WallPost post={post.node} key={post.node.id} />);
    });
      return rows;
}

  render(){
    return(
      <div className="col-md-6">
        <ul className="list-group media-list media-list-stream">
          <li className="media list-group-item p-a">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Message" />
              <div className="input-group-btn">
                <button type="button" className="btn btn-default">
                  <span className="icon icon-camera"></span>
                </button>
                </div>
              </div>
            </li>
            {this.renderRow()}
            
        </ul>
      </div>

    );
  }
}

export default Relay.createContainer(PostList, {

  fragments: {
    userPosts: () => Relay.QL `
      fragment on User {
        id,
        posts(first:10){
          pageInfo{
            hasNextPage
          },
          edges{
            node{
                id,
                ${WallPost.getFragment('post')},
              }
          }
        }
      }
    `,
    userFeed: () => Relay.QL `
      fragment on User {
        id,
        feed(first:10){
          pageInfo{
            hasNextPage
          },
          edges{
            node{
                id,
                ${WallPost.getFragment('post')},
              }
          }
        }
      }
    `,
    userStories: () => Relay.QL `
      fragment on User {
        id,
        stories(first:10){
          pageInfo{
            hasNextPage
          },
          edges{
            node{
                id,
                ${WallPost.getFragment('post')},
              }
          }
        }
      }
    `,

  }
});
