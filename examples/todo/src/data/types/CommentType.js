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

import GraphQLUser from './UserType';

import {
  NodeInterface
} from '../interfaces/NodeInterface';

export default new GraphQLObjectType({
  name: 'Comment',
  description: 'A Comments on Post by user',
  fields: () => ({
    id: globalIdField('Comment'),
    user: {
      type: GraphQLUser,
      resolve: (it, args, {
        rootValue
      }) => rootValue.backend.redis.user.getLoader.load(it.userId),
      description: "Author of Post",
    },
    comment: {
      type: GraphQLString,
      description: "Comment",
    },
    postId: {
      type: GraphQLInt,
      description: "PostId",
    },

    since: {
      type: GraphQLInt,
      description: "Comment since"
    },
    userId: {
      type: GraphQLString,
      description: "Id of user who created this post"
    }
  }),
  interfaces: [NodeInterface],
});
