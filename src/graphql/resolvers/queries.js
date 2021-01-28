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

  getGuarantee: (_, { userId, locationId }) =>
    Guarantee.findAll({
      where: { userId: userId, locationId: locationId, Date: Date },
    }),

  getSlotsToReserve: async (_, { guaranteeId }) => {
    const guarantee = await Guarantee.findByPk(guaranteeId);
    const location = await Location.findByPk(guarantee.locationId);
    const guaranteesByLocation = await Guarantee.findAll({
      where: { locationId: location.id, isExpired: false },
    });
    const slots = await Slot.findAll({
      where: { isReserved: false, locationId: location.id },
    });
    const waitListsByLocation = await Waitlist.findAll({
      where: { locationId: location.id },
    });

    return {
      location: location,
      numberOfAvailableSlots: slots.length,
      numberOfPending: guaranteesByLocation.length,
      numberOfWaitlist: waitListsByLocation.length,
      availableSlots: slots,
    };
  },

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
      pendingGuarantees: numberPending,
      pendingWaitlists: numberWaitlist,
      availableSlots: theSlots,
    };
  },
};
