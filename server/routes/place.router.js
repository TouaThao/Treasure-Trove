const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/address', (req, res) => {
    const queryText =`SELECT name,address,city,longitude,latitude,vendor from place;`
    pool.query(queryText)
    .then((results) => {
        res.send(results.rows)
    }).catch((err) => {
        res.sendStatus(500)
    })
});

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

module.exports = router;