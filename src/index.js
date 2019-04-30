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

/*
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Project from './resolvers/Project'
import Task from './resolvers/Task'


const server = new GraphQLServer( {
  typeDefs: './src/schema.graphql',
  resolvers: {
    Task, Project, User
  }
} );
 */
