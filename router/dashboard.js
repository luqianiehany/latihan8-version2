const router = require('express').Router();
const dashboard = require('../controllers/dashboard');
const layoutName = (name) => (req, res, next) => {
  res.locals.layout = `layouts/${name}`;
  next();
};

router.use(layoutName('dashboard'));
router.get('/', dashboard.home);
router.get('/post', dashboard.post.index);

module.exports = router;
