// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //product_name VARCHAR(100) NOT NULL,
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price DECIMAL NOT NULL,Validates that the value is a decimal.
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {isDecimal: true}
    },
    //stock INT NOT NULL DEFAULT 10, Validates that the value is numeric.
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {isNumeric: true}
    },
    //category_id INT, FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
