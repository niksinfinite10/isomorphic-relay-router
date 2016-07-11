/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import TrendingSearch from  '../components/TrendingSearch';
// import PostPhotos from '../components/PostPhotos';
// import RightPanel from '../components/RightPanel';
import ProfileCard from '../components/ProfileCard';
import NotificationRow from '../components/NotificationRow';
//
// import AddTodoMutation from '../mutations/AddTodoMutation';
// import TodoListFooter from '../components/TodoListFooter';
// import TodoTextInput from '../components/TodoTextInput';
import Relay from 'react-relay';


class  Notifications extends Component {

  render(){

  return (
    <div className="with-top-navbar" >
      <div className="container p-t-md">
        <div className="row">
          <div className="col-md-3">
            <TrendingSearch />
          </div>
          <NotificationRow />
        </div>
      </div>
   </div>
  );
}

}


export default Relay.createContainer(Notifications, {
  fragments: {
    node: () => Relay.QL`
      fragment on User {
        id,
        displayName,
        ${ProfileCard.getFragment('node')},
      }
    `,
},
});
