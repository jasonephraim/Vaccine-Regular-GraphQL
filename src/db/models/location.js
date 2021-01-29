"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  Location.associate = function (models) {};
  return Location;
};
