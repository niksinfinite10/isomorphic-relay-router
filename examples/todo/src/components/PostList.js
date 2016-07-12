/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';
import Relay from 'react-relay';
import WallPost from './WallPost';
import Comment from './Comment';
// import Dimensions from 'react-dimensions';
// const windowDimentions = Dimensions.get('window');

class PostList  extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  componentDidMount(){}
  componentWillMount(){
  }

  renderRow(){
      let rows = [];
      this.props.userFeed.feed.edges.map( (post) => {
        rows.push(<WallPost post={post.node} key={post.node.id} />);
    });
      return rows;
    }


    loadMore() {
          var count = this.props.relay.variables.count;
          this.props.relay.setVariables({
            count: count + 5
          });
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
        <a href="javascript:void(0)" onClick={this.loadMore.bind(this)} > Load More  </a>
      </div>

    );

  }
}

export default Relay.createContainer(PostList, {

  initialVariables: {
      count: 5,
    },

  fragments: {
    userPosts: () => Relay.QL `
      fragment on User {
        id,
        posts(first:$count){
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
        feed(first:$count){
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
        stories(first:$count){
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
