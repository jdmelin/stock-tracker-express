'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserStock.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      stockId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Stocks',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'UserStock',
      timestamps: false,
    }
  );
  return UserStock;
};
