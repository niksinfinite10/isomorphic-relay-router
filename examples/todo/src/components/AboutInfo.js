/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';
import Relay from 'react-relay';
import {DIETENUM} from '../EnumValues';
import {getTimeAgo} from '../Utils';

class AboutInfo extends Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div className="panel panel-default visible-md-block visible-lg-block">
        <div className="panel-body">
          <h5 className="m-t-0">About <small>· <a href="#">Edit</a></small></h5>
          <ul className="list-unstyled list-spaced">
            <li><span className="text-muted icon icon-calendar m-r"></span>Meals shared <a href="#"> {this.props.node.totalMealsCount}</a></li>
            <li><span className="text-muted icon icon-users m-r"></span>Diet<a href="#"> {DIETENUM[this.props.node.diet]}</a></li>
            <li><span className="text-muted icon icon-github m-r"></span>Since<a href="#"> for {getTimeAgo(this.props.node.dietSince)}</a></li>
            <li><span className="text-muted icon icon-home m-r"></span>From<a href="#"> {this.props.node.location}</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(AboutInfo, {
  fragments: {
    node: () => Relay.QL`
      fragment on User {
        id,
        totalMealsCount,
        diet,
        dietSince,
        location
      }
    `,
  },
});
