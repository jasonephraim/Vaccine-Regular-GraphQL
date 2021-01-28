const {
  Guarantee,
  Location,
  Slot,
  User,
  Waitlist,
} = require("../../db/models");

module.exports = {
  getGuarantees: () => Guarantee.findAll(),

  getGuaranteeByPk: (_, { id }) => Guarantee.findByPk(id),

  getUsers: () => User.findAll(),

  getUserByPk: (_, { id }) => User.findByPk(id),

  getWaitlists: () => Waitlist.findAll(),

  getSlots: () => Slot.findAll(),

  getSlotByPk: (_, { id }) => Slot.findByPk(id),

  getSlotsForLocation: async (_, { id }) => {
    const theLocation = await Location.findByPk(id);
    const theSlots = await Slot.findAll({
      where: { locationId: id, isReserved: false },
    });
    const numberAvailable = theSlots.length;
    const numberPending = (await Guarantee.findAll()).length;
    const numberWaitlist = (await Waitlist.findAll()).length;
    return {
      location: theLocation,
      numberOfAvailableSlots: numberAvailable,
      numberOfPending: numberPending,
      numberOfWaitlist: numberWaitlist,
      availableSlots: theSlots,
    };
  },
};
