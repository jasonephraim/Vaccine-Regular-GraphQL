const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const Waitlist = sequelize.define(
    "Waitlist",
    {
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
  Waitlist.beforeCreate((waitlist, _) => {
    return (waitlist.id = uuid());
  });
  Waitlist.associate = function (models) {
    // associations can be defined here
  };
  return Waitlist;
};
