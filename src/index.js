import {GraphQLServer} from 'graphql-yoga';
import Query from './resolvers/Query';

const server = new GraphQLServer( {
  typeDefs: './src/schema.graphql', // relative to the root of the project
  resolvers: {
    Query,
  },
} );

server.start( ( server ) => {
  console.log( server );
  console.log( 'Server listening on localhost:4000' );
} );
