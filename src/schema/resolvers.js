import { ApolloError } from 'apollo-server-express'

/** queries */
import EventQuery from 'datasources/events/eventQuery.js'

const responseError = error => {
  const { message, extensions } = error

  if (extensions?.response?.body?.errorMessage) {
    throw new ApolloError(
      message + ' - ' + extensions.response.body.errorMessage, 
      extensions.response.body.errorCode
    );
  } else {
    throw new ApolloError(message, 'No extensions on error');
  }
}

const resolvers = {
  Query: {
    ...EventQuery(responseError)
  },
  // Mutation: {}
}

export default resolvers