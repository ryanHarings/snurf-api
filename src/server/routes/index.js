const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

// ********** dev only **********

router.get('/', function (req, res, next) {

});

router.get('/allContent', function (req, res, next) {
  knex('content')
  .select('*')
  .join('accounts', 'accounts.id', 'content.user_id')
  .select('accounts.name')
  .then(content => {
    res.send(content);
  })
  .catch((err) => {
    console.log(err);
    res.send('Error');
  });
});

module.exports = router;
