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
import PostPhotos from '../components/PostPhotos';
import PostList from '../components/PostList';
// import WallPost from '../components/WallPost';
import RightPanel from '../components/RightPanel';
import MessageModal from '../components/MessageModal';
import React from 'react';
import Relay from 'react-relay';

class Home1 extends React.Component {
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  };
  _handleTextInputSave = (text) => {
    this.context.relay.commitUpdate(
      new AddTodoMutation({text, viewer: this.props.viewer})
    );
  };

  render() {
    return (
        <div >
          <div className="container p-t-md">
                  <div className="row">
                    <div className="col-md-3">
                      <h1>Home index</h1>
                    </div>

                      <RightPanel />
                  </div>
                </div>
              </div>

    );
  }
}

export default Home1;

// export default Relay.createContainer(Home1, {
//   fragments: {
//     node: () => Relay.QL`
//       fragment on User {
//         id,
//         displayName,
//
//       }
//     `,
//
//
//   },
// });
