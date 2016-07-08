/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';

import PostGallery from '../components/PostGallery';

import AddTodoMutation from '../mutations/AddTodoMutation';
import TodoListFooter from '../components/TodoListFooter';
import TodoTextInput from '../components/TodoTextInput';
import Relay from 'react-relay';


class Profile extends Component {

  render(){


  return (
<div>
    <div className="profile-header text-center"
         style={{backgroundImage: "url(img/iceland.jpg)"}} >
      <div className="container">
        <div className="container-inner">
          <img className="img-circle media-object" src="../assets/img/avatar-dhg.png" alt="noimage" />
          <h3 className="profile-header-user">Dave Gamache</h3>
          <p className="profile-header-bio">
            I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.
          </p>
        </div>
      </div>

      <nav className="profile-header-nav">
        <ul className="nav nav-tabs">
          <li className="active">
            <a href="#">Photos</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
          <li>
            <a href="#">Anothers</a>
          </li>
        </ul>
      </nav>
    </div>
    <PostGallery />
</div>

  );
}
}


export default Relay.createContainer(Profile, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        totalCount,

      }
    `,
  },
});


// export default Profile;
