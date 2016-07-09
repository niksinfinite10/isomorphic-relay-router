/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';

import Relay from 'react-relay';

class Post extends Component{
  render(){
    console.log('render method of Post',this.props.post);

    return (
       <li className="media list-group-item p-a">
          <a className="media-left" href="#">
            <img
              className="media-object img-circle"
              src={'img/avatar-dhg.png'} />
          </a>
          <div className="media-body">
            <div className="media-heading">
              <small className="pull-right text-muted"></small>
              <h5> </h5>
            </div>
            <p>{this.props.post.title}</p>
            <div className="media-body-inline-grid" data-grid="images">
              <div>
                <img data-action="zoom" data-width="1050" data-height="700" src={'img/avatar-dhg.png'} />
              </div>
            </div>
          </div>
        </li>
    );
  }


}


class WallPost  extends Component{
  constructor(){
    super();
  }
  componentWillMount(){
      // this.fetchData();

  }

  renderRow(){

      let rows = [];
      let lastPost = null;
      this.props.posts.edges.map( (post) => {
      console.log('render row method --->',post);
      rows.push(<Post post={post.node} key={post.node.id} />);
    });

       return rows;
     }


  render(){



    //let post = this.props.post.node;
    // let post = {'user':{'profileImageUrl':}};
    //  console.log("render wa  llpost ",post);
    // console.log('WallPost render method ',this.props.posts);

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
            {this.renderRow()}
        </ul>
      </div>

    );
  }
}

export default Relay.createContainer(WallPost, {
  fragments: {
  post: () => Relay.QL `
      fragment on Post {
          id,
          title,
          likeCount,
          userHasLiked,
          description,
          imageUrlList(width:500){
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

// export default WallPost;
