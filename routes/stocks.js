const router = require('express').Router();
const stockController = require('../controllers/stock-controller');
const { checkAuth } = require('../middlewares/auth');

router.route('/stocks').get(checkAuth, stockController.getAll);

router.route('/stocks/:stockId')
  .post(stockController.createUserStock)
  .delete(stockController.removeUserStock)

router.route('/my-stocks').get(checkAuth, stockController.getAllByUserId);

module.exports = router;
