const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from database
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  console.log('req: ', req.body);
  const username = req.body;
  const password = encryptLib.encryptPassword(req.body.password);
  const queryText = `INSERT INTO "person"
   (username, password,firstname,lastname,city,user_type) 
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
  // console.log('Did we get this query?',queryText)
  pool.query(queryText, [username.username, password,username.firstname,username.lastname,username.city,username.user_type])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { next(err); });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});


router.put('/:id',(req, res)=>{
  updateUser = req.body
  if(req.isAuthenticated()){
    console.log('did routerpost show',req.body)
    let queryText = `UPDATE person SET firstname =$2, lastname=$3, city=$4 WHERE id = $1;`;
    pool.query(queryText, [req.user.id, updateUser.firstname, updateUser.lastname, updateUser.city])
    .then(()=>{
      res.sendStatus(200);
    })
    .catch((error)=>{
      console.log('------error--------\n',error)
      res.sendStatus(500);
    })
  }
})

module.exports = router;
