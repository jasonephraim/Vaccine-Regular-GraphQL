const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getGuarantees: [Guarantee]!
    getGuaranteeByPk(id: String!): Guarantee
  }
  type Mutation {
    createGuarantee(model: GuaranteeInput!): Guarantee!
  }
  type Guarantee {
    id: ID!
    userId: String!
    locationId: String!
    isExpired: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  input GuaranteeInput {
    userId: String!
    locationId: String!
    isExpired: Boolean!
  }
`;

module.exports = typeDefs;
