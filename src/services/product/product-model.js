'use strict';

// product-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const product = sequelize.define('products', {
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING },
    category: { type: Sequelize.STRING },
    fone: { type: Sequelize.STRING },
    photo: { type: Sequelize.STRING }
  }, {
    freezeTableName: true
  });

  product.sync();

  return product;
};
