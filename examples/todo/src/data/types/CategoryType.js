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

import UserConnection from './UserConnection';

import {
  NodeInterface
} from '../interfaces/NodeInterface';

import {
  pageable,
  getPagingParameters
} from "relay-cursor-paging";

import {
  getPagedResults
} from '../utils.js';

const GraphQLCategory = new GraphQLObjectType({
  name: 'Category',
  description: 'A category ',
  fields: () => ({
    id: globalIdField('Category'),

    name: {
      type: GraphQLString,
      description: "Title of category"
    },
    description: {
      type: GraphQLString,
      description: "Description of Category"
    },
    parentId: {
      type: GraphQLString,
      description: "category ID of parent"
    },

    parent: {
      type: GraphQLCategory,
      resolve: (it, args, {
        rootValue
      }) => rootValue.backend.redis.category.get(it.parentId),
      description: "category  of parent"
    },
    imageUrl: {
      type: GraphQLString,
      description: "URL of  Image"
    },

    users: {
      type: UserConnection.connectionType,
      args: pageable({}),
      resolve: getPagedResults((root, rootValue, offset, limit, _args) =>
        rootValue.backend.redis.category.getUsersBycategory(root.id, offset, limit)),
      description: "users present in category ",

    },


  }),
  interfaces: [NodeInterface],
});

export default GraphQLCategory;
