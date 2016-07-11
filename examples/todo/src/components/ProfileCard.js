/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';

import Relay from 'react-relay';

class ProfileCard extends Component{

  constructor(){
    super();
  }
render(){
    return(
      <div className="panel panel-default panel-profile m-b-md">
          <div className="panel-heading" style={{backgroundImage: `url(${this.props.node.coverImageUrl})`}} ></div>
              <div className="panel-body text-center">
                <a href="profile/index.html">
                  <img
                    className="panel-profile-img"
                    src={this.props.node.profileImageUrl?this.props.node.profileImageUrl:'/img/avatar-dhg.png'} />
                </a>

                <h5 className="panel-title">
                  <a className="text-inherit" href="profile/index.html">{this.props.node.displayName}</a>
                </h5>

                <p className="m-b-md">{this.props.node.vegStory?this.props.node.vegStory:'not shared story'}</p>
                <ul className="panel-menu">
                  <li className="panel-menu-item">
                    <a href="#userModal" className="text-inherit" data-toggle="modal">
                      Followers
                      <h5 className="m-y-0">{this.props.node.followerCount}</h5>
                    </a>
                  </li>

                  <li className="panel-menu-item">
                    <a href="#userModal" className="text-inherit" data-toggle="modal">
                      Following
                      <h5 className="m-y-0">{this.props.node.followingCount}</h5>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
    );
  }

}

export default Relay.createContainer(ProfileCard, {
  fragments: {
    node: () => Relay.QL`
      fragment on User {
        id,
        displayName,
        followerCount,
        followingCount,
        vegStory,
        profileImageUrl,
        coverImageUrl,

      }
    `,
  },
});



// export default ProfileCard;
