/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';

let myData=undefined;


class WallPost  extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
      // this.fetchData();

    }

  render(){
    //let post = this.props.post.node;
    // let post = {'user':{'profileImageUrl':}};
    //  console.log("render wa  llpost ",post);

    return(
      <div className="col-md-6">
        <ul className="list-group media-list media-list-stream">

          <li className="media list-group-item p-a">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Message" />
              <div className="input-group-btn">
                <button type="button" className="btn btn-default">
                  <span className="icon icon-camera"></span>
                </button>
              </div>
            </div>
          </li>

          <li className="media list-group-item p-a">
            <a className="media-left" href="#">
              <img
                className="media-object img-circle"
                src={'img/avatar-dhg.png'} />
            </a>
            <div className="media-body">
              <div className="media-heading">
                <small className="pull-right text-muted"></small>
                <h5>No displayName</h5>
              </div>
              <p>no title</p>
              <div className="media-body-inline-grid" data-grid="images">
                <div>
                  <img data-action="zoom" data-width="1050" data-height="700" src={'img/avatar-dhg.png'} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    );
  }
}


export default WallPost;
