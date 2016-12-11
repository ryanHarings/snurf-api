const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// ********** dev only **********
router.get('/', function (req, res, next) {
  knex('accounts')
  .then(accounts => {
    res.send(accounts);
  })
  .catch((err) => {
    console.log(err);
    res.send('Error grabbing all accounts');
  });
});

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

router.post('/login', function (req, res, next) {
  console.log('reg.body', req.body);

  const loginEmail = req.body.email;
  const loginPassword = req.body.password;

  if (!loginEmail || !loginPassword) {
    let result = {};
    result.message = 'Nice try.';
    res.send('incomplete');
  } else {
    knex('accounts')
    .then(accounts => {
      let user = accounts.filter(user => user.email === loginEmail)[0];
      if (!user) {
        res.send('signup');
      } else {
        if (bcrypt.compareSync(loginPassword, user.password)) {
          res.send('success');
        } else {
          res.send('password');
        }
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

});

module.exports = router;
