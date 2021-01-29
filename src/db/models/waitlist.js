"use strict";
module.exports = (sequelize, DataTypes) => {
  const Waitlist = sequelize.define(
    "Waitlist",
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
      day: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      locationId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Waitlist.associate = function (models) {};
  return Waitlist;
};
