const { Guarantee } = require("../../db/models");
const uuidv4 = require("uuid").v4;

module.exports = {
  createGuarantee: (_, { model }) =>
    Guarantee.create({ ...model, id: uuidv4() }),
};
