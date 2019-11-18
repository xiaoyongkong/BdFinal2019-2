var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'bd20192imdb.cpzsfymfqdmt.us-east-2.rds.amazonaws.com',
  user     : 'root',
  password : 'bd489imdb',
  database : 'IMDB'
});

connection.connect();

function query(sql) {
  return new Promise((resolve, reject) => {

    connection.query(sql, (err, rows, fields) => {
      if (err) throw err;
      resolve({data: rows, fields: fields})
    });

  })
}

/* GET home page. */
router.get('/',async function(req, res, next) {
  let movies = []

  query('SELECT * FROM `title.basics` LIMIT 10;').then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(404)
  })
});

module.exports = router;