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


router.put('/:id',rejectUnauthenticated,(req, res)=>{
  console.log('Did we hitthisstuffhere?',req.body,'how about id?', req.user)
  updateUser = req.body
  if(req.isAuthenticated()){
    console.log('did routerpost show',req.body)
    let queryText = `UPDATE person SET firstname =$2, lastname=$3, city=$4 WHERE id = $1;`;
    pool.query(queryText[req.user.id, updateUser.firstname, updateUser.lastname, updateUser.city])
    .then((result)=>{
      console.log('user info', result.row)
      res.send(result.rows);
    })
    .catch((error)=>{
      console.log(error)
      res.sendStatus(500);
    })
  }
})


router.delete


module.exports = router;



// router.put('/:id', rejectUnauthenticated, (req, res) => {
//   // PUT request to update user information
//   const newUserData = req.body
  
//   const queryText = `UPDATE "person" SET "email" = $2, "first_name" = $3, "middle_name" = $4, "last_name" = $5, "primary_phone" = $6, "address" = $7, "city" = $8, "state" = $9, "zipcode" = $10
//   WHERE "id" = $1;`;

//   const serializedData = [req.user.id, newUserData.email, newUserData.first_name, newUserData.middle_name, newUserData.last_name, newUserData.primary_phone, newUserData.address, newUserData.city, newUserData.state, newUserData.zipcode];

//   pool.query(queryText, serializedData)
//     .then((result) => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       res.sendStatus(500);
//     })
// });