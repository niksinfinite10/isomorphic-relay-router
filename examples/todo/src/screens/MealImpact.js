import React,{Component} from 'react';
import Relay from 'react-relay';
import {DIETENUM} from '../EnumValues';

class MealImpact extends Component {

  render(){
    let miles = 5;
    if(this.props.node.diet === 'VEGAN')
        miles=7;

    return(
      <div className="container p-t-md">
              <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 ">
                <div className="panel-heading"> </div>
                <div className="panel panel-default panel-profile m-b-md">
                    <div className="panel-body text-center">
                          <a href="profile/index.html">
                            <img
                              className="panel-profile-img"
                              src={this.props.node.user.profileImageUrl} />
                          </a>

                          <h5 className="panel-title">
                            <a className="text-inherit" href="profile/index.html">{this.props.node.user.displayName}</a>
                          </h5>
                          <h4 className="m-b-md">I saved {miles} miles of driving car equivalent Co2 by eating {DIETENUM[this.props.node.diet]} meal</h4>
                          <ul className="list-group media-list media-list-stream">
                          <li className="media list-group-item p-a">

                             <div className="media-body">
                                <div className="media-body-inline-grid" data-grid="images">
                                   <img  data-action="zoom" data-width={`${this.props.node.imageUrlList[0].width}`} data-height={`${this.props.node.imageUrlList[0].height}`} src={`${this.props.node.imageUrlList[0].url}`} />

                                </div>
                                <div className="media-left">
                                   <div style={{backgroundColor:'#FF6600',color:'#FFFFFF',fontWeight:'bold',padding:'5px'}} >{DIETENUM[this.props.node.diet]}</div>
                                   <p>{this.props.node.title}</p>
                                </div>
                             </div>
                           </li>
                          </ul>
                        </div>
                      </div>
                      </div>
              </div>
            </div>


    );
  }
}

export default Relay.createContainer(MealImpact, {
  fragments: {
    node: () => Relay.QL`
    fragment on Post {
        id,
        title,
        likeCount,
        userHasLiked,
        description,
        imageUrlList(width:100){
          url,
          width,
          height
        },
        diet,
        since,
        user{
          id,
          diet,
          profileImageUrl
          displayName,
        },
        commentCount,

      }`
},
});
