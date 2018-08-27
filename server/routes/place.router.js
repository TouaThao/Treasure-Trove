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

router.get('/store/:id', (req, res) => {
    const queryText =`SELECT * from place where user_id = ${req.params.id};`
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch((err) => {
        res.sendStatus(500)
    })
});


router.get('/feedback/:id', (req,res)=>{
    console.log('did we get feedback?', req.params.id)
    const queryText = `SELECT * from review r inner join person p on p.id = r.user_id where r.place_id=${req.params.id};`
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch((err) => {
        console.log('bad')
        res.sendStatus(500)
    })
})

/**
 * POST route template
 */
router.post('/location', (req, res) => {
const location = req.body;
const queryText =`INSERT INTO place (name,address,city,longitude,latitude,vendor,user_id) 
                VALUES($1,$2,$3,$4,$5,$6,$7);`
pool.query(queryText, [location.name,location.address,
    location.city,location.longitude,location.latitude,location.vendor, location.user_id])
    .then((results) => {
        res.sendStatus(201)
    }).catch((err) => {
        res.sendStatus(500)
    })
});

router.post('/review', (req,res)=>{
    const review = req.body
    const queryText= `INSERT INTO review (user_id,place_id,comment) VALUES($1,$2,$3);`
    pool.query(queryText, [ review.user_id, review.place_id, review.comment])
    .then((results) => {
        res.sendStatus(201)
    }).catch((err) => {
        res.sendStatus(500)
    })
})

router.delete('/:id', (req,res)=>{
    if (req.isAuthenticated()){
        let id = req.params.id
        let queryText = `DELETE from review WHERE review_id = $1;`
        pool.query(queryText, [id] )
        .then((results) => {
            res.sendStatus(201)
        }).catch((err) => {
            res.sendStatus(500)
        })

    }

})
module.exports = router;