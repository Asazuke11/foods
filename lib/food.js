'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/food_database',
  {
    logging: false,
    operatorsAliases: false 
  });
const Food = sequelize.define('Food', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  foodstyle: {
    type: Sequelize.STRING
  },
  foodname: {
    type: Sequelize.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: true
});

Food.sync();
module.exports = Food;