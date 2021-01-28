const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const Guarantee = sequelize.define(
    "Guarantee",
    {
      userId: DataTypes.STRING,
      locationId: DataTypes.STRING,
      isExpired: DataTypes.BOOLEAN,
    },
    {}
  );
  Guarantee.beforeCreate((guarantee, _) => {
    return (guarantee.id = uuid());
  });
  Guarantee.associate = function (models) {
    // associations can be defined here
  };
  return Guarantee;
};
