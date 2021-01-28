const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const Waitlist = sequelize.define(
    "Waitlist",
    {
      userId: DataTypes.STRING,
      day: DataTypes.DATE,
      locationId: DataTypes.STRING,
    },
    {}
  );
  Waitlist.beforeCreate((waitlist, _) => {
    return (waitlist.id = uuid());
  });
  Waitlist.associate = function (models) {
    // associations can be defined here
  };
  return Waitlist;
};
