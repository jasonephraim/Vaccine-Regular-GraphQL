'use strict';
module.exports = (sequelize, DataTypes) => {
  const Slot = sequelize.define('Slot', {
    day: DataTypes.DATE,
    locationID: DataTypes.STRING,
    isReserved: DataTypes.BOOLEAN,
    userId: DataTypes.STRING
  }, {});
  Slot.associate = function(models) {
    // associations can be defined here
  };
  return Slot;
};