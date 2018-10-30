'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    phone_number: DataTypes.STRING,
    name: DataTypes.STRING,
    profile_picture_url: DataTypes.TEXT
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};