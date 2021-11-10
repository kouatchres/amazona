import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../../graphql/schema';
import { createContext } from '../../../graphql/context';
import depthLimit from 'graphql-depth-limit';
// import { applyMiddleware } from 'graphql-middleware';
// import { permissions } from './permissions';

export const config = {
  api: {
    bodyParser: false
  }
};

const apolloServer = new ApolloServer({
  validationRules: [depthLimit(5)],
  introspection: true,
  schema,
  // schema: applyMiddleware(schema, permissions),
  context: createContext,
  tracing: process.env.NODE_ENV === 'development'
});

export default apolloServer.createHandler({
  path: '/api/graphql'
});
