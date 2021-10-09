import { gql } from 'apollo-server-express'

import EventDefs from 'typedefs/events/Events.graphql'

const graphqlTypeDefs = gql`
  
  # LOOK TO QUERIES FILES
  type Query {
    Events: Events
    EventsByID(id: !ID): EventsByID
  }

  type Mutation {}
`

const typedefs = [
  graphqlTypeDefs,
  EventDefs
]

export default typedefs