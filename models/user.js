const {sequelize, Sequelize} = require('../config/connection');

const user = sequelize.define('user',{
  'id':{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  'phone_number':Sequelize.BIGINT,
  'name':Sequelize.STRING,
  'profile_picture_url':Sequelize.TEXT,
  'createdAt': {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  'updatedAt': {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }, 
    //prevent sequelize transform table name into plural
    // freezeTableName: true,
})

module.exports = user