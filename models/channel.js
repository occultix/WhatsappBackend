'use strict';
module.exports = (sequelize, DataTypes) => {
  const channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {});
  channel.associate = function(models) {
    // associations can be defined here
  };
  return channel;
};