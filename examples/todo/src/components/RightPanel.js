/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';


import Suggestions from './Suggestions';
import Sponsored from './Sponsored';

class  RightPanel extends Component {
  render(){
  return (
    <div className="col-md-3">


      <div className="alert alert-warning alert-dismissible hidden-xs" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <a  href="profile/index.html"> Visit your profile! </a>

    
      </div>
      <Sponsored />
      <Suggestions />

    </div>

    );
  }
}
export default RightPanel;
