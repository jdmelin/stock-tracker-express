const router = require('express').Router();
const userController = require('../controllers/user-controller');

router
  .route('/login')
  .get((req, res) => {
    res.render('template', {
      locals: {
        loggedIn: false,
      },
      partials: {
        content: '/partials/login',
      },
    });
  })
  .post(userController.logIn);

router
  .route('/register')
  .get((req, res) => {
    res.render('template', {
      locals: {
        loggedIn: false,
      },
      partials: {
        content: '/partials/register',
      },
    });
  })
  .post(userController.register);

router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
