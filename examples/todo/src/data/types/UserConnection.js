import {
  connectionDefinitions,

} from 'graphql-relay';

import UserGraphQLType from './UserType';

export default connectionDefinitions({
  name: 'User',
  nodeType: UserGraphQLType
});
