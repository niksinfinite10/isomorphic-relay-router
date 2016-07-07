import {
  connectionDefinitions,

} from 'graphql-relay';

import Type from './CategoryType';

export default connectionDefinitions({
  name: 'Category',
  nodeType: Type
});
