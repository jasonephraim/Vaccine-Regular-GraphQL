const {
  Guarantee,
  Location,
  Slot,
  User,
  Waitlist,
} = require("../../db/models");

module.exports = {
  getGuarantees: () => Guarantee.findAll(),
};
