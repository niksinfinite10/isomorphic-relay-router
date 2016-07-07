import {
  GraphQLEnumType
} from 'graphql';

export default new GraphQLEnumType({
  name: 'PostType',
  values: {
    FEED: {
      value: 'Feed'
    },
    STORIES: {
      value: 'Stories'
    },
    POST: {
      value: 'Post'
    }
  }
});
