const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejsmysqlexpress', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  logging: false
});

class Product extends Sequelize.Model { }

Product.init({
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: Sequelize.STRING,
  product_price: Sequelize.FLOAT,
  is_stock: Sequelize.BOOLEAN

}, { sequelize, modelName: 'product' });

module.exports = Product;

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con éxito.');
  } catch (error) {
    console.error('Error en la conexión:', error);
  }
}

testConnection();
