const router = require('express').Router();
const stockController = require('../controllers/stock-controller');

router.route('/stocks').get(stockController.getAll);

router.route('/stocks/:stockId')
  .post(stockController.createUserStock)
  .delete(stockController.removeUserStock)

router.route('/my-stocks').get(stockController.getAllByUserId);

module.exports = router;
