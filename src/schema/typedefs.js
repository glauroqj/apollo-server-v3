import { gql } from 'apollo-server-express'

const graphqlTypeDefs = gql`

  type Query {

  }

  type Mutation {}
`

const typedefs = [
  graphqlTypeDefs
]

export default typedefs