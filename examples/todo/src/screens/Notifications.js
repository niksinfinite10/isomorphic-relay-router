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
import Photos from '../components/photos';
import RightPanel from '../components/RightPanel';
import ProfileCard from '../components/ProfileCard';

import AddTodoMutation from '../mutations/AddTodoMutation';
import TodoListFooter from '../components/TodoListFooter';
import TodoTextInput from '../components/TodoTextInput';
import Relay from 'react-relay';


class  Notifications extends Component {

  render(){

  return (
    <div className="with-top-navbar" >
      <div className="container p-t-md">
        <div className="row">
          <div className="col-md-3">
            <TrendingSearch />
            <Photos />
            </div>
            <div className="col-md-6">
              <ul className="list-group media-list media-list-stream">
                <li className="list-group-item p-a">
                  <h3 className="m-a-0">Notifications</h3>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-globe text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">1 min</small>
                    <div className="media-heading">
                      <a href="#"><strong>Dave Gamache</strong></a> went traveling
                    </div>

                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-game-controller text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">3 min</small>
                    <div className="media-heading">
                      <a href="#"><strong>Mark Otto</strong></a> played destiny
                    </div>

                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-user text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">34 min</small>
                    <div className="media-heading">
                      <a href="#"><strong>Fat</strong></a> and <a href="#"><strong>1 other</strong></a> followed you
                    </div>
                    <ul className="avatar-list">
                      <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-fat.jpg" /></li>
                      <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-dhg.png" /></li>
                    </ul>
                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-camera text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">3 min</small>
                    <div className="media-heading">
                      <a href="#"><strong>Dave Gamache</strong></a> uploaded a photo
                    </div>

                    <div className="media-body-inline-grid" data-grid="images">
                      <img data-width="640" data-height="640" data-action="zoom" src="../assets/img/instagram_3.jpg" />
                    </div>
                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-flag text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">3 min</small>
                    <div className="media-heading">
                      <a href="#"><strong>Mark Otto</strong></a> flagged your post
                    </div>

                    <div className="panel panel-default m-t">
                      <div className="panel-body">
                        <div className="media">
                          <a className="media-left" href="#">
                            <img
                              className="media-object img-circle"
                              src="../assets/img/avatar-fat.jpg" />
                          </a>
                          <div className="media-body">
                            <div className="media-body-text">
                              <div className="media-heading">
                                <small className="pull-right text-muted">1 hr</small>
                                <h5 className="m-b-0">Jacob Thornton</h5>
                              </div>
                              Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-heart text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">4 hr</small>
                    <div className="media-heading">
                      <a href="#"><strong>Mark Otto</strong></a> and <a href="#"><strong>2 others</strong></a> favorited your post
                    </div>
                    <ul className="avatar-list">
                      <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-dhg.png" /> </li>
                      <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-mdo.png" /></li>
                      <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-fat.jpg" /></li>
                    </ul>
                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-user text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">30 min</small>
                    <div className="media-heading">
                      You followed <a href="#"><strong>Jacob Thornton</strong></a> and <a href="#"><strong>1 other</strong></a>
                    </div>

                    <div className="m-t">
                      <div className="row">
                        <div className="col-md-6">


                          <ProfileCard />
                        </div>

                         <div className="col-md-6">
                          <div className="panel panel-default panel-profile">
                            <div className="panel-heading"
                                 style={{backgroundImage: "url(../assets/img/instagram_1.jpg)"}}></div>
                            <div className="panel-body text-center">
                              <img className="panel-profile-img" src="../assets/img/avatar-mdo.png" />

                              <h5 className="panel-title">Mark Otto</h5>
                              <p className="m-b-md">GitHub and Bootstrap. Formerly at Twitter. Huge nerd.</p>

                              <button className="btn btn-primary-outline btn-sm">
                                <span className="icon icon-add-user"></span> Follow
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-cog text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">30 min</small>
                    <div className="media-heading">
                      <a href="#"><strong>Jacob Thornton</strong></a> and <a href="#"><strong>1 other</strong></a> updated their settings
                    </div>
                    <ul className="avatar-list">
                      <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-fat.jpg" /></li>
                      <li className="avatar-list-item"><img className="img-circle" src="../assets/img/avatar-dhg.png" /></li>
                    </ul>
                  </div>
                </li>

                <li className="list-group-item media p-a">
                  <div className="media-left">
                    <span className="icon icon-creative-commons-noncommercial-us text-muted"></span>
                  </div>

                  <div className="media-body">
                    <small className="pull-right text-muted">1 min</small>
                    <div classNameName="media-heading">
                      <a href="#"><strong>Jacob Thornton</strong></a> quit his job
                    </div>

                  </div>
                </li>
              </ul>
            </div>
            <RightPanel />
        </div>
      </div>
   </div>
  );
}

}


export default Relay.createContainer(Notifications, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        totalCount,

      }
    `,
  },
});


// +export default Notifications;
