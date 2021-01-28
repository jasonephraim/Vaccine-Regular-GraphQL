const { Guarantee, Location } = require("../../db/models");
const uuidv4 = require("uuid").v4;

module.exports = {
  createGuarantee: (_, { model }) =>
    Guarantee.create({ ...model, id: uuidv4() }),

  createLocation: (_, { model }) => Location.create({ ...model, id: uuidv4() }),
};
