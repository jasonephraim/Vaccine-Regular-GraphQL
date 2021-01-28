const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {}
  );
  User.beforeCreate((user, _) => {
    return (user.id = uuid());
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
