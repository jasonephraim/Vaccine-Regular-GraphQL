const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getGuarantees: [Guarantee]!
    getGuaranteeByPk(id: String!): Guarantee
    # getGuarantee(userId: String!, locationId: String!, Date: date!): Guarantee
    getSlotsToReserve(guaranteeId: String!): SlotsByLocation
    getUsers: [User]!
    getUserByPk(id: String!): User
    getWaitlists: [Waitlist]!
    getSlots: [Slot]!
    getSlotByPk(id: String!): Slot
    getSlotsForLocation(id: String!): SlotsByLocation
  }
  type Mutation {
    createAccount(model: UserInput!): User!
    createGuarantee(model: GuaranteeInput!): Guarantee!
    createLocation(model: LocationInput!): Location!
    slotToReserveRequest(userId: String!, slotId: String!): Slot
    deleteWaitlist(id: String!): Boolean!
    unreserveSlot(id: String!): Boolean!

    createSlot(model: SlotInput!): Slot!
    createWaitlist(model: WaitlistInput!): Waitlist!
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
  type Waitlist {
    id: ID!
    userId: String!
    locationId: String!
    createdAt: String!
    updatedAt: String!
  }
  input WaitlistInput {
    userId: String!
    locationId: String!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    password: String!
    phoneNumber: String!
    createdAt: String!
    updatedAt: String!
  }
  input UserInput {
    firstName: String!
    lastName: String!
    age: Int!
    password: String!
    phoneNumber: String!
  }
  type Slot {
    id: ID!
    locationId: String!
    isReserved: Boolean!
    userId: String
    createdAt: String!
    updatedAt: String!
  }
  type SlotsByLocation {
    location: Location!
    numberOfAvailableSlots: Int
    pendingGuarantees: Int
    pendingWaitlists: Int
    availableSlots: [Slot]!
  }
  input SlotInput {
    locationId: String!
    isReserved: Boolean!
    userId: String
  }
  type Location {
    id: ID!
    name: String!
    address: String!
    createdAt: String!
    updatedAt: String!
  }
  input LocationInput {
    name: String!
    address: String!
  }
`;

module.exports = typeDefs;
