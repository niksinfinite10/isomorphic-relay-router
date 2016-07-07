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
    var hasTodos = this.props.viewer.totalCount > 0;
    return (

      <div className="container p-t-md">
                <div className="row">
                  <div className="col-md-3">
                    <ProfileCard    />
                    <AboutInfo />
                    <Photos />
                  </div>

                    <WallPost />
                    <RightPanel />
                </div>
              </div>


    );
  }
}
// export default App;

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        totalCount,
        ${AddTodoMutation.getFragment('viewer')},
        ${TodoListFooter.getFragment('viewer')},
      }
    `,
  },
});
