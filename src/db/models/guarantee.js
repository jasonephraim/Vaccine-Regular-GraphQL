'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guarantee = sequelize.define('Guarantee', {
    userId: DataTypes.STRING,
    locationId: DataTypes.STRING,
    isExpired: DataTypes.BOOLEAN
  }, {});
  Guarantee.associate = function(models) {
    // associations can be defined here
  };
  return Guarantee;
};