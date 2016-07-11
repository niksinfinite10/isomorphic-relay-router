/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';


class PostGallery extends Component {

  render(){


  return (
    <div className="container m-y-md" data-grid="images">
      <div>
        <img data-width="640" data-height="400" data-action="zoom" src="/img/instagram_5.jpg" />
      </div>

      <div>
        <img data-width="640" data-height="640" data-action="zoom" src="/img/instagram_6.jpg" />
      </div>

      <div>
        <img data-width="640" data-height="640" data-action="zoom" src="/img/instagram_7.jpg" />
      </div>
    </div>
  );
}
}

export default PostGallery;
