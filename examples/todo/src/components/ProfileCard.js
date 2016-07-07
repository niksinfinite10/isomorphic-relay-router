/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';



class ProfileCard extends Component{

  constructor(){
    super();
  }
render(){
    return(
      <div className="panel panel-default panel-profile m-b-md">
          <div className="panel-heading"  ></div>
              <div className="panel-body text-center">
                <a href="profile/index.html">
                  <img
                    className="panel-profile-img"
                    src={'img/avatar-dhg.png'} />
                </a>

                <h5 className="panel-title">
                  <a className="text-inherit" href="profile/index.html">nikhil</a>
                </h5>

                <p className="m-b-md">this is veg story</p>
                <ul className="panel-menu">
                  <li className="panel-menu-item">
                    <a href="#userModal" className="text-inherit" data-toggle="modal">
                      Followers
                      <h5 className="m-y-0">100</h5>
                    </a>
                  </li>

                  <li className="panel-menu-item">
                    <a href="#userModal" className="text-inherit" data-toggle="modal">
                      Following
                      <h5 className="m-y-0">ndka</h5>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
    );
  }

}

export default ProfileCard;
