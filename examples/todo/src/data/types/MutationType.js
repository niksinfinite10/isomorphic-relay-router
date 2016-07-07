import {
  GraphQLObjectType
} from 'graphql';

import CreateUserMutation from '../mutation/CreateUserMutation';
import CreatePostMutation from '../mutation/CreatePostMutation';
import CreateCommentMutation from '../mutation/CreateCommentMutation';
import DeleteCommentMutation from '../mutation/DeleteCommentMutation';
import DeletePostMutation from '../mutation/DeletePostMutation';
import LoginMutation from '../mutation/LoginMutation';
import FollowMutation from '../mutation/FollowMutation';
import ToggleLikePostMutation from '../mutation/ToggleLikePostMutation';



export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: CreateUserMutation,
    createPost: CreatePostMutation,
    createComment: CreateCommentMutation,
    login: LoginMutation,
    followUser: FollowMutation,
    toggleLikePost: ToggleLikePostMutation,      
    deleteComment: DeleteCommentMutation,
    deletePost: DeletePostMutation,
  })
});
