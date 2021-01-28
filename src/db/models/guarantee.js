"use strict";
module.exports = (sequelize, DataTypes) => {
  const Guarantee = sequelize.define(
    "Guarantee",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locationId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isExpired: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {}
  );
  Guarantee.associate = function (models) {
    // associations can be defined here
  };
  return Guarantee;
};
