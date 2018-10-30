'use strict';
module.exports = (sequelize, DataTypes) => {
  const channel_user = sequelize.define('channel_user', {
    channel_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  channel_user.associate = function(models) {
    // associations can be defined here
  };
  return channel_user;
};