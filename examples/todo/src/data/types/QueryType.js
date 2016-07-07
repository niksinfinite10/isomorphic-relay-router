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
require('babel-polyfill');

import {
  pageable,
  getPagingParameters
} from "relay-cursor-paging";

import {
  getPagedResults
} from '../utils.js';


import GraphQLCategory from './CategoryType';
import GraphQLCategoryConnection from './CategoryConnection';
import GraphQLUser from './UserType';
import GraphQLPost from './PostType';
import GraphQLExplore from './ExploreType';
import {
  NodeField
} from '../interfaces/NodeInterface';
export default new GraphQLObjectType({
  name: 'Query',

  fields: () => ({
    node: NodeField,
    // Add your own root fields here
    user: {
      type: GraphQLUser,
      args: {
        id: {
          type: GraphQLID
        },
        userName: {
          type: GraphQLString
        },
        cognitoId: {
          type: GraphQLString
        }
      },
      resolve: async(_, args, {
        rootValue
      }) => {
        
        let userName = undefined;
        let cognitoId = undefined;
        if (args.id) {
          var {
            type,
            id
          } = fromGlobalId(args.id);
          userName = id;

        } else if (args.userName) {
          userName = args.userName;
        } else if (args.cognitoId) {
          return rootValue.backend.redis.user.getUserByCognitoId(args.cognitoId);
        }

        return rootValue.backend.redis.user.getLoader.load(userName);
      },

    },
    post: {
      type: GraphQLPost,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: async(_, args, {
        rootValue
      }) => {

        let GraphQLPostId = args.id;
        var {
          type,
          id
        } = fromGlobalId(GraphQLPostId);
        console.log("Got Post Id at root", id);
        return rootValue.backend.redis.post.get(id);
      }
    },
    explore: {
      type: GraphQLExplore,
      resolve: () => new Object()
    },


    category: {
      type: GraphQLCategory,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: async(_, args, {
        rootValue
      }) => {
        let id = args.id || 1234;
        return rootValue.backend.redis.category.get(id);
      },

    },


  }),

});
