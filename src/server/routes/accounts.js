const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// ********** dev only **********

router.post('/register', function (req, res, next) {
  console.log('reg.body', req.body);

  const name = req.body.name;
  const email = req.body.email;
  let hash = bcrypt.hashSync(req.body.password, salt);
  const active = req.body.active;

  knex('accounts')
  .then(users => {
    let user = users.filter(user => user.email === email)[0];
    if (!user) {
      knex('accounts')
      .insert({
        name: name,
        email: email,
        password: hash,
        active: active
      })
      .returning('*')
      .then(newUser => {
        res.send(newUser);
      })
      .catch(err => {
        console.log(err);
        res.send('Error');
      });
    } else {
      res.status(404).json({msg: 'user not added'});
    }
  })
  .catch(err => {
    res.send('err');
  });

});

module.exports = router;
