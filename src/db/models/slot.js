const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const Slot = sequelize.define(
    "Slot",
    {
      day: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      locationID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isReserved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Slot.beforeCreate((slot, _) => {
    return (slot.id = uuid());
  });
  Slot.associate = function (models) {
    // associations can be defined here
  };
  return Slot;
};
