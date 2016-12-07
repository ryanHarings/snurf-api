const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

// const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);

// ********** dev only **********
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
router.use(allowCrossDomain);

router.get('/', function (req, res, next) {

});

router.get('/allContent', function (req, res, next) {
  knex('content')
  .select('*')
  .join('accounts', 'accounts.id', 'content.user_id')
  .select('accounts.name')
  .then(content => {
    console.log(content);
    res.send(content);
  })
  .catch((err) => {
    console.log(err);
    res.send('Error');
  });
});

module.exports = router;
