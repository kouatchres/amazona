import * as Models from './models';
import { Mutation } from './Mutations';
import Query from './Query.graphql';

export const resolvers = {
  ...Models,
  Query,
  Mutation
};
