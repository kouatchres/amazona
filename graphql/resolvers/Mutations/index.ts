import * as Region from './Region.graphql';
import * as Users from './User.graphql';

export const Mutation = {
  ...Region,
  ...Users
};
