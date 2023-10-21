const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {
  async logIn(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { email },
      });

      bcrypt.compare(password, user.password, (err, match) => {
        if (match) {
          req.session.user = user;
          res.json({ message: 'success' });
        } else {
          res.json({ message: 'failure' });
        }
      });
    } catch {
      // handle error
    }
  },

  async register(req, res) {
    try {
      await User.create(req.body);
      res.json({ message: 'success' });
    } catch {
      res.json({ message: 'failure' });
    }
  },};
