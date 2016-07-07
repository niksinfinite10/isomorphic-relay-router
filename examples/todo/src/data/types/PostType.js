import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromArray,
  globalIdField,
  fromGlobalId
} from 'graphql-relay';
import DietEnum from './DietEnum';
import UserGraphQLType from './UserType';

import {
  pageable,
  getPagingParameters
} from "relay-cursor-paging";

import {
  getPagedResults
} from '../utils.js';

import UserConnection from './UserConnection';
import CommentConnection from './CommentConnection';
import {
  NodeInterface
} from '../interfaces/NodeInterface';


export default new GraphQLObjectType({
  name: 'Post',
  description: 'A Post created by user',
  fields: () => ({
    id: globalIdField('Post'),    
    title: {
      type: GraphQLString,
      description: "Title of Post"
    },
    userHasLiked: {
      type: GraphQLBoolean,
      description: "liked true or false",
      resolve: (it, args, {
        rootValue
      }) => {
        return rootValue.backend.redis.post.userHasLiked(it.id, rootValue.authToken.userId);
      }
    },
    user: {
      type: UserGraphQLType,
      resolve: (it, args, {
        rootValue
      }) => rootValue.backend.redis.user.getLoader.load(it.userId),
      description: "Author of Post",
    },
    description: {
      type: GraphQLString,
      description: "Description of Post"
    },
    likeCount: {
      type: GraphQLInt,
      description: "Like Count"
    },
    diet: {
      type: DietEnum,
      description: "Diet which user follows"
    },
    since: {
      type: GraphQLInt,
      description: "Diet which user follows"
    },
    imageUrl: {
      type: GraphQLString,
      description: "URL of Profile Image"
    },
    userId: {
      type: GraphQLString,
      description: "Id of user who created this post"
    },
    "rawImageUrl": {
      type: GraphQLString,
      description: "URL of Profile Image"
    },
    commentCount: {
      type: GraphQLInt,
      description: "Count of Comments",
      resolve: (it, args, {
        rootValue
      }) => rootValue.backend.redis.comment.getCommentCountByPostId(it.id)
    },
    comments: {
      type: CommentConnection.connectionType,
      args: pageable({}),
      resolve: getPagedResults((root, rootValue, offset, limit, _args) =>
        rootValue.backend.redis.comment.getCommentsByPostId(root.id, offset, limit)),
      description: "comments on post ",
    }
  }),
  interfaces: [NodeInterface],
});
