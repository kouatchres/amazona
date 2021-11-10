import * as User from './User.graphql';
import * as Region from './Region.graphql';

export const Query = {
  ...User,
  ...Region
};
