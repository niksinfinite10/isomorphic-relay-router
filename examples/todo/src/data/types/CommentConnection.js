import {
  connectionDefinitions,

} from 'graphql-relay';

import CommentType from './CommentType';

export default connectionDefinitions({
  name: 'Comment',
  nodeType: CommentType
});
