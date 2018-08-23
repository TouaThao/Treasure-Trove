const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/address', (req, res) => {
    const queryText =`SELECT id,name,address,city,longitude,latitude,vendor from place;`
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch((err) => {
        res.sendStatus(500)
    })
});

router.get('/feedback', (req,res)=>{
    console.log('did we get feedback?')
    const queryText = `SELECT comment from review;`
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch((err) => {
        res.sendStatus(500)
    })
})

/**
 * POST route template
 */
router.post('/location', (req, res) => {
const location = req.body;
const queryText =`INSERT INTO place (name,address,city,longitude,latitude,vendor) 
                VALUES($1,$2,$3,$4,$5,$6);`
pool.query(queryText, [location.name,location.address,
    location.city,location.longitude,location.latitude,location.vendor])
    .then((results) => {
        res.sendStatus(201)
    }).catch((err) => {
        res.sendStatus(500)
    })
});

router.post('/review', (req,res)=>{
    console.log('did we hit review?')
    const review = req.body
    console.log('what is req',req.body)
    const queryText= `INSERT INTO review (review_id,user_id,place_id,star) VALUES(1,2,3,4);`
    pool.query(queryText [review.review_id, review.user_id, review.place_id, review.star])
    .then((results) => {
        res.sendStatus(201)
    }).catch((err) => {
        res.sendStatus(500)
    })
})
module.exports = router;