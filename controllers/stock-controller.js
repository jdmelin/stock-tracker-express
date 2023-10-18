const { Stock, User } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const stocks = await Stock.findAll({
        attributes: ['id', 'name', 'symbol'],
        order: [['name', 'asc']],
      });
      res.json(stocks);
    } catch {
      // handle error
    }
  },

  async getAllByUserId(req, res) {
    const id = 1;

    try {
      const user = await User.findByPk(id, {
        order: [[{ model: Stock, as: 'stocks' }, 'name', 'asc']],
        include: {
          model: Stock,
          as: 'stocks',
          attributes: ['id', 'name', 'symbol'],
          through: {
            attributes: [],
          },
        },
      });
      res.json(user);
    } catch (e) {
      console.log(e);
      // handle error
    }
  },
};
