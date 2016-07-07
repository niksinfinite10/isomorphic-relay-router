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
import PostTypeEnum from './PostTypeEnum';
import PostConnection from './PostConnection';
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


export default new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
    id: globalIdField('User'),

    userName: {
      resolve: (it) => it.id,
      type: GraphQLString
    },
    fName: {
      type: GraphQLString,
      description: "First Name of user"
    },
    cognitoId: {
      type: GraphQLString,
      description: "CognitoId"
    },
    lName: {
      type: GraphQLString,
      description: "Last Name of user"
    },
    gender: {
      type: GraphQLString,
      description: "gender of user"
    },
    phone: {
      type: GraphQLString,
      description: "phone no of user"
    },
    email: {
      type: GraphQLString,
      description: "email of user"
    },
    followingCount: {
      type: GraphQLInt,
      description: "Count of users current user is following"
    },
    since: {
      type: GraphQLInt,
      description: "Profile Created Since"
    },
    followerCount: {
      type: GraphQLInt,
      description: "Count of users followed by current user"
    },
    tagLine: {
      type: GraphQLString,
      description: "TagLine which appears on the profile"
    },
    shortDescription: {
      type: GraphQLString,
      description: "Short Description about Profile"
    },
    diet: {
      type: DietEnum,
      description: "Diet which user follows"
    },
    dietSinceYear: {
      type: GraphQLInt,
      description: "Year since which user is following this diet"
    },
    profileImageUrl: {
      type: GraphQLString,
      description: "URL of Profile Image"
    },
    coverImageUrl: {
      type: GraphQLString,
      description: "URL of Cover Image"
    },
    waterSaved: {
      type: GraphQLInt,
      description: "Year since which user is following this diet"
    },
    animalsSaved: {
      type: GraphQLInt,
      description: "Year since which user is following this diet"
    },
    carbonSaved: {
      type: GraphQLInt,
      description: "Year since which user is following this diet"
    },    
    userIsFollowing: {
      type: GraphQLBoolean,
      description: "If current user is following this user",
      resolve: (it, args, {
        rootValue
      }) => {
        return rootValue.backend.redis.user.isFollowing(it.id, rootValue.authToken.userId);
      }
    },
    posts: {
      type: PostConnection.connectionType,
      args: pageable({
        type: {
          type: PostTypeEnum
        }
      }),
      resolve: getPagedResults((root, rootValue, offset, limit, _args) => {
        console.log("Got type", _args.type);
        switch (_args.type) {
          case "Stories":
            return rootValue.backend.redis.post.getStoriesByUser(root.id, offset, limit);
          case "Feed":
            return rootValue.backend.redis.feed.get(root.id, offset, limit);
          default:
            return rootValue.backend.redis.post.getPostsByUser(root.id, offset, limit);
        }
      }),
      description: "Post of User",

    },
  }),
  interfaces: [NodeInterface],
});
