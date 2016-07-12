import React,{Component} from 'react';
import Relay from 'react-relay';
import LikeMutation from '../mutations/LikeMutation';
import MessageModal from './MessageModal';
import CommentList from '../components/CommentList';


class WallPost extends Component{
  constructor(){
    super();
    this.state = { isCommentClicked:false};
  }


  likePressed(){

    this.props.relay.commitUpdate(new LikeMutation({post: this.props.post}),{
        onSuccess: data => { console.log('likemutation success!') },onFailure: err => { console.log('error ',err); }  });

        if (this.props.post.userHasLiked === false) {
          let user_diet = this.props.post.user.diet
            ? this.props.post.user.diet
            : 'Not Specified';
      }

  }

  render(){
    console.log('wallpost rendering');
  return (
       <li className="media list-group-item p-a">
          <a className="media-left" href="#">
            <img
              className="media-object img-circle"
              src={`${this.props.post.user.profileImageUrl}`} />
          </a>
          <div className="media-body">
            <div className="media-heading">
              <small className="pull-right text-muted"> {this.props.post.since} </small>
              <h5>{this.props.post.user.displayName}</h5>
            </div>
            <p>{this.props.post.title}</p>
            <div className="media-body-inline-grid" data-grid="images">
              <div>
                <img data-action="zoom" data-width={`${this.props.post.imageUrlList[0].width}`} data-height={`${this.props.post.imageUrlList[0].height}`} src={`${this.props.post.imageUrlList[0].url}`} />
              </div>
              <div className="media-left">
              <a href='javascript:void(0)' onClick={this.likePressed.bind(this)}>
                <span className="icon icon-heart text-muted" style={{color:this.props.post.userHasLiked?'red':'grey',width:'20px',height:'20px'}}></span>{this.props.post.likeCount > 0
                              ? this.props.post.likeCount>1? " "+this.props.post.likeCount+' likes ':this.props.post.likeCount+' like '
                              : ' like '}
                </a>
                &nbsp;&nbsp;&nbsp;

                <a data-toggle="modal" href='javascript:void(0)'  onClick={() => { this.setState({isCommentClicked:true}); } } >
                  <span className="icon icon-chat text-muted"></span>{this.props.post.commentCount > 0
                              ? this.props.post.commentCount>1?" "+this.props.post.commentCount+" Comments":this.props.post.commentCount+" Comment"
                              : " Comment "}
                </a>
              </div>
            </div>
            {this.state.isCommentClicked?<CommentList node={this.props.post} />:null}

          </div>
        </li>

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
          ${LikeMutation.getFragment('post')},
          ${CommentList.getFragment('node')}
        }`
},
});
