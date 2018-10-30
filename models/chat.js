'use strict';
module.exports = (sequelize, DataTypes) => {
  const chat = sequelize.define('chat', {
    channel_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    image_url: DataTypes.STRING
  }, {});
  chat.associate = function(models) {
    // associations can be defined here
  };
  return chat;
};