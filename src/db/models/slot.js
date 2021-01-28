"use strict";
module.exports = (sequelize, DataTypes) => {
  const Slot = sequelize.define(
    "Slot",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      day: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      locationId: {
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
  Slot.associate = function (models) {
    // associations can be defined here
  };
  return Slot;
};
