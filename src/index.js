import {GraphQLServer} from 'graphql-yoga';
import {makeExecutableSchema} from 'graphql-tools'
import {importSchema} from 'graphql-import';
import Query from './resolvers/Query';


const typeDefs = importSchema( './src/schema.graphql' );
const resolvers = {Query};

const schema = makeExecutableSchema( {typeDefs, resolvers} );

const server = new GraphQLServer( {schema});

server.start( ( server ) => {
  console.log( `Server listening on http://localhost:${server.port}` );
} );
