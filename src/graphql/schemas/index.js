const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getGuarantees: [Guarantee]!
    getGuaranteeByPk(id: String!): Guarantee
    getSlotsForLocation(id: String!): SlotsByLocation
    getSlots: [Slot]!
    getSlotByPk(id: String!): Slot
    getGuaranteeSlots(guaranteeId: String!): SlotsByLocation
    getUsers: [User]!
    getUserByPk(id: String!): User
    getWaitlists: [Waitlist]!
  }
  type Mutation {
    createGuarantee(model: GuaranteeInput!): Guarantee!
    createLocation(model: LocationInput!): Location!
    createSlot(model: SlotInput!): Slot!
    unreserveSlot(id: String!): Boolean!
    slotToReserveRequest(userId: String!, slotId: String!): Slot
    createAccount(model: UserInput!): User!
    createWaitlist(model: WaitlistInput!): Waitlist!
    deleteWaitlist(id: String!): Boolean!
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
