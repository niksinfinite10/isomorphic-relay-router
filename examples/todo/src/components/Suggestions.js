/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';



class  Suggestions extends Component {
  render(){
  return (
    <div className="panel panel-default m-b-md hidden-xs">
      <div className="panel-body">
      <h5 className="m-t-0">Likes <small>· <a href="#">View All</a></small></h5>
    <ul className="media-list media-list-stream">
    <li className="media m-b">
      <a className="media-left" href="#">
        <img
          className="media-object img-circle"
          src="assets/img/avatar-fat.jpg" />
      </a>
      <div className="media-body">
        <strong>Jacob Thornton</strong> @fat
        <div className="media-body-actions">
          <button onClick={() => {console.log('this is log');}} className="btn btn-primary-outline btn-sm">
            <span className="icon icon-add-user"></span> Follow</button>
        </div>
      </div>
    </li>
     <li className="media">
      <a className="media-left" href="#">
        <img
          className="media-object img-circle"
          src="assets/img/avatar-mdo.png" />
      </a>
      <div className="media-body">
        <strong>Mark Otto</strong> @mdo
        <div className="media-body-actions">
          <button className="btn btn-primary-outline btn-sm">
            <span className="icon icon-add-user"></span> Follow</button>
        </div>
      </div>
    </li>
    </ul>
    </div>
    </div>
  );
}
}

export default Suggestions;
