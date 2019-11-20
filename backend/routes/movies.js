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
router.get('/',function(req, res) {
  query('SELECT * FROM `title.basics` LIMIT 10;').then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
});

router.get('/countMoviesBy10Years/:year',function(req, res) {
  let from = req.params.year
  let until = parseInt(req.params.year) + 10
  console.log("Oiiiii " + until)
  query("SELECT COUNT(*) FROM `title.basics` WHERE startYear > " + from + " AND startYear < " + until + ";").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/countAdultMovies',function(req, res) {
  console.log("COUNT ADULT MOVIES");
  query("SELECT COUNT(*) FROM `title.basics` WHERE isAdult = 1;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/countNonAdultMovies',function(req, res) {
  query("SELECT COUNT(*) FROM `title.basics` WHERE isAdult = 0;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})


module.exports = router;