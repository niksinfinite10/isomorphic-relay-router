import {
  GraphQLEnumType
} from 'graphql';

export default new GraphQLEnumType({
  name: 'Diet',
  values: {
    RAW_VEGAN: {
      value: 'Raw Vegan'
    },
    VEGAN: {
      value: 'Vegan'
    },
    VEGETARIAN: {
      value: 'Vegetarian'
    }
  }
});
