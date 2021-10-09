import { gql } from 'apollo-server-express'

import EventDefs from 'typedefs/events/Events.graphql'

const graphqlTypeDefs = gql`

  type Query {

  }

  type Mutation {}
`

const typedefs = [
  graphqlTypeDefs
]

export default typedefs