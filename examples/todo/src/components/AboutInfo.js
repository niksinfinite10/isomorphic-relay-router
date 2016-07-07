/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';


class AboutInfo extends Component{
  constructor(){
    super();

  }




  render(){
//      this.user =  this.props.user.data.user;
// diet,dietSince,
    return(
      <div className="panel panel-default visible-md-block visible-lg-block">
        <div className="panel-body">
          <h5 className="m-t-0">About <small>· <a href="#">Edit</a></small></h5>
          <ul className="list-unstyled list-spaced">
            <li><span className="text-muted icon icon-calendar m-r"></span>Went to <a href="#">100 Meals</a></li>
            <li><span className="text-muted icon icon-users m-r"></span>Became friends with <a href="#">vegan</a></li>
            <li><span className="text-muted icon icon-github m-r"></span>Worked at <a href="#">11 yeard</a></li>
            <li><span className="text-muted icon icon-home m-r"></span>Lives in <a href="#">fremont</a></li>
            <li><span className="text-muted icon icon-location-pin m-r"></span>From <a href="#"></a></li>
          </ul>
        </div>
      </div>

    );
  }
}


export default AboutInfo;
