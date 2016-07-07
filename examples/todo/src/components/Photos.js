/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';


class  Photos extends Component {

  render(){
  return (


    <div className="panel panel-default visible-md-block visible-lg-block">
     <div className="panel-body">

       <h5 className="m-t-0">Photos <small>· <a href="#">Edit</a></small></h5>

       <div data-grid="images" data-target-height="150">
         <div>
           <img data-width="640" data-height="640" data-action="zoom" src="img/instagram_5.jpg" />
         </div>

         <div>
           <img data-width="640" data-height="640" data-action="zoom" src="img/instagram_6.jpg" />
         </div>

         <div>
           <img data-width="640" data-height="640" data-action="zoom" src="img/instagram_7.jpg" />
         </div>
       </div>
     </div>
       </div>



  );
  }
}

export default Photos;
