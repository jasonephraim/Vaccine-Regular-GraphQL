const {
  Guarantee,
  Location,
  User,
  Slot,
  Waitlist,
} = require("../../db/models");
const uuidv4 = require("uuid").v4;

module.exports = {
  createAccount: (_, { model }) => {
    return User.create({ ...model, id: uuidv4() });
  },

  createGuarantee: (_, { model }) =>
    Guarantee.create({ ...model, id: uuidv4() }),

  createLocation: (_, { model }) => Location.create({ ...model, id: uuidv4() }),

  slotToReserveRequest: async (_, { userId, slotId }) => {
    const guarantee = await Guarantee.findOne({ where: { userId } });
    if (!guarantee.isExpired) {
      const reservedSlot = await Slot.findByPk(slotId);
      if (!reservedSlot.isReserved) {
        return reservedSlot.update({
          ...reservedSlot,
          isReserved: true,
          userId,
        });
      }
    }
    return false;
  },

  deleteWaitlist: async (_, { id }) => {
    const deletedWaitlist = await Waitlist.destroy({ where: { id } });

    return deletedWaitlist ? true : false;
  },
  unreserveSlot: async (_, { id }) => {
    const slot = await Slot.findByPk(id);
    if (slot.isReserved) {
      await slot.update({ ...slot, isReserved: false, userId: null });
      return true;
    }
    return false;
  },
};
