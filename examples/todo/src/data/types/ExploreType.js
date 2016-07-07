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
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  connectionFromPromisedArraySlice,
  nodeDefinitions,
} from 'graphql-relay';


import {
  pageable,
  getPagingParameters
} from "relay-cursor-paging";

import {
  getPagedResults
} from '../utils.js';


import GraphQLCategory from './CategoryType';
import GraphQLCategoryConnection from './CategoryConnection';
import UserConnection from './UserConnection';

import {
  NodeField
} from '../interfaces/NodeInterface';
export default new GraphQLObjectType({
  name: 'Explore',
  fields: () => ({

    users: {
      type: UserConnection.connectionType,
      args: pageable({}),
      resolve: getPagedResults((root, rootValue, offset, limit, _args) =>
        rootValue.backend.redis.category.getUsersBycategory("4", offset, limit)),
      description: "users present in category ",

    },

    categories: {
      type: GraphQLCategoryConnection.connectionType,
      args: pageable({}),
      resolve: getPagedResults((root, rootValue, offset, limit, _args) => {
        return rootValue.backend.redis.category.list(offset, limit);
      }),
      description: "Categories by page"
    },




  }),

});
