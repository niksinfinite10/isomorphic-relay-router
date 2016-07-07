/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';


class  Sponsored extends Component {
  render(){
  return (
    <div className="panel panel-default m-b-md hidden-xs">
      <div className="panel-body">
        <h5 className="m-t-0">Sponsored</h5>
        <div data-grid="images" data-target-height="150">
          <img className="media-object" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_2.jpg" />
        </div>
        <p><strong>It might be time to visit Iceland.</strong> Iceland is so chill, and everything looks cool here. Also, we heard the people are pretty nice. What are you waiting for?</p>
        <button className="btn btn-primary-outline btn-sm">Buy a ticket</button>
      </div>
    </div>
  );
}
}
export default Sponsored;
