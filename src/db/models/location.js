const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  Location.beforeCreate((location, _) => {
    return (location.id = uuid());
  });
  Location.associate = function (models) {
    // associations can be defined here
  };
  return Location;
};
