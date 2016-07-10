0/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import AddTodoMutation from '../mutations/AddTodoMutation';
import TodoListFooter from '../components/TodoListFooter';
import TodoTextInput from '../components/TodoTextInput';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import AboutInfo from '../components/AboutInfo';
import Photos from '../components/Photos';
// import WallPost from '../components/WallPost';
import WallPost from '../components/WallPost';
import RightPanel from '../components/RightPanel';
import MessageModal from '../components/MessageModal';

import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };
  _handleTextInputSave = (text) => {
    this.context.relay.commitUpdate(
      new AddTodoMutation({text, viewer: this.props.viewer})
    );
  };
  render() {
    // var hasTodos = this.props.viewer.totalCount > 0;

    // var rows = [];
    // var lastPost = null;
    // this.props.node.forEach(function(product) {
    //   if (product.category !== lastCategory) {
    //     rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    //   }
    //   rows.push(<ProductRow product={product} key={product.name} />);
    //   lastCategory = product.category;


    // console.log('this is data from database', this.props.node.displayName);
    console.log('this is post edges>>>>>>>',this.props.node.feed);
    return (
        <div >
          <div className="container p-t-md">
                  <div className="row">
                    <div className="col-md-3">
                      <ProfileCard node={this.props.node}   />
                      <AboutInfo node={this.props.node} />
                      <Photos post={this.props.node.post} />
                    </div>
                      <WallPost post={this.props.node.feed} />
                      <RightPanel />
                  </div>
                </div>
              </div>

    );
  }
}
// export default App;

export default Relay.createContainer(App, {
  fragments: {
    node: () => Relay.QL`
      fragment on User {
        id,
        displayName,
        ${ProfileCard.getFragment('node')},
        ${AboutInfo.getFragment('node')},
        feed(first:10){
          edges{
            node{
              id,
              title,
              imageUrlList(width:1050){
                url,
                width,
                height
              },
              since,
              user{
                id,
                diet,
                profileImageUrl
                displayName,
              },

            }
          }
        },
        posts(first:10){
          edges{
            node{
              id,
              title,
              imageUrlList(width:1050){
                url,
                width,
                height
              },
              since,
              user{
                id,
                diet,
                profileImageUrl
                displayName,
              },

            }
          }
        }

      }
    `,


  },
});
