const router = require('express').Router();
const stockController = require('../controllers/stock-controller');

router.route('/stocks').get(stockController.getAll);

router.route('/my-stocks').get(stockController.getAllByUserId);

module.exports = router;
