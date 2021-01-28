const uuid = require("uuid/v4");

("use strict");
module.exports = (sequelize, DataTypes) => {
  const Guarantee = sequelize.define(
    "Guarantee",
    {
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
  Guarantee.beforeCreate((guarantee, _) => {
    return (guarantee.id = uuid());
  });
  Guarantee.associate = function (models) {
    // associations can be defined here
  };
  return Guarantee;
};
