const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('template', {
    partials: {
      content: '/partials/home',
    },
  });
});

module.exports = router;
