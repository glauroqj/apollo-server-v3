import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'

const startApolloServer = async () => {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer })
    ]
  })
  await server.start()

  // Additional middleware can be mounted at this point to run before Apollo.
  // app.use('*', jwtCheck, requireAuth, checkScope)

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path: '/graphql' })
  await new Promise(resolve => httpServer.listen({ port: 4001 }, resolve))
  console.log(`🚀 Apollo Server is ready at http://localhost:4001${server.graphqlPath}`)
  return { server, app }
}


startApolloServer()

/**
 DOC: https://www.apollographql.com/docs/apollo-server/api/apollo-server/
*/