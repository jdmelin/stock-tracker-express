const { Stock, User, UserStock } = require('../models');

module.exports = {
  async createUserStock(req, res) {
    const userId = 1;
    const { stockId } = req.params;
    try {
      await UserStock.create({
        userId,
        stockId,
      });
      res.json({ message: 'success' });
    } catch {
      res.json({ message: 'failure' });
    }
  },

  async getAll(req, res) {
    try {
      const userId = 1;

      const allStocks = await Stock.findAll({
        attributes: ['id', 'name', 'symbol'],
        order: [['name', 'asc']],
      });

      const userStocks = await UserStock.findAll({ where: { userId } });

      const stocks = allStocks.map((stock) => stock.get({ plain: true }));

      const favorites = userStocks.reduce((favs, userStock) => {
        if ((userStock.userId = userId)) {
          favs.push(userStock.stockId);
        }
        return favs;
      }, []);

      for (const stock of stocks) {
        const isFavorite = favorites.includes(stock.id);
        stock.favorite = isFavorite;
      }

      res.render('template', {
        locals: {
          stocks,
        },
        partials: {
          content: '/partials/stocks',
        },
      });
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

      res.render('template', {
        locals: {
          stocks: user.stocks,
        },
        partials: {
          content: '/partials/my-stocks',
        },
      });
    } catch (e) {
      console.log(e);
      // handle error
    }
  },

  async removeUserStock(req, res) {
    const userId = 1;
    const { stockId } = req.params;

    try {
      await UserStock.destroy({
        where: {
          userId,
          stockId,
        },
      });
      res.json({ message: 'success' });
    } catch {
      res.json({ message: 'failure' });
    }
  },
};
