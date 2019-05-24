import {GraphQLServer} from 'graphql-yoga'
import {makeExecutableSchema} from 'graphql-tools'
import {importSchema} from 'graphql-import'
import {merge} from 'lodash'

import MeResolver from './resolvers/MeResolver'
import BookResolver from './resolvers/BookResolver'
import AuthorResolver from './resolvers/AuthorResolver'

const typeDefs = importSchema( './src/schema.graphql' )

const resolvers = merge( MeResolver, BookResolver, AuthorResolver )

const schema = makeExecutableSchema( {
  typeDefs,
  resolvers
} )

const server = new GraphQLServer( {schema, context: {myVar: 'some-value'}} )

let promise = server.start( ( server ) => {
  console.log( `Server listening on http://localhost:${server.port}` )
} )
