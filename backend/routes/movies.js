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
  query("SELECT COUNT(*) FROM `Title` WHERE launchYear between " + from + " AND " + until + ";").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/countAdultMovies',function(req, res) {
  query("SELECT COUNT(*) FROM `Title` WHERE isAdult = 1;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/countNonAdultMovies',function(req, res) {
  query("SELECT COUNT(*) FROM `Title` WHERE isAdult = 0;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query1',function(req, res) {
  query("SELECT PrimaryTitle, LaunchYear FROM Title LIMIT 10;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query2',function(req, res) {
  query("SELECT *  FROM Episode AS E NATURAL LEFT OUTER JOIN Title LIMIT 10;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query3',function(req, res) {
  query("SELECT PrimaryTitle, AverageRating FROM Title NATURAL JOIN Rating ORDER BY AverageRating DESC;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query4',function(req, res) {
  query("SELECT * FROM (SELECT Name, EpisodeID FROM Genres NATURAL JOIN TitleGenre NATURAL JOIN Title NATURAL JOIN Episode ORDER BY Name) AS MovieSummary GROUP BY Name;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query5',function(req, res) {
  query("SELECT PrimaryTitle, Name FROM Title NATURAL JOIN TitleType NATURAL JOIN Types ORDER BY PrimaryTitle;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query6',function(req, res) {
  query("SELECT PrimaryTitle FROM Title T1 WHERE TitleID NOT IN (SELECT TitleID FROM Title T2 NATURAL JOIN Episode E) LIMIT 10;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query7',function(req, res) {
  query("SELECT S1.Name FROM Staff S1 WHERE S1.BirthYear in (SELECT MIN(S2.BirthYear) FROM Staff S2 WHERE S2.BirthYear > 1900);").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query8',function(req, res) {
  query("SELECT PrimaryTitle, COUNT(EpisodeID) FROM Title T NATURAL JOIN Episode E GROUP BY PrimaryTitle;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query9',function(req, res) {
  query("SELECT PrimaryTitle, COUNT(StaffID) FROM Title T NATURAL JOIN TitleStaff TS NATURAL JOIN Staff S GROUP BY PrimaryTitle;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

router.get('/query10',function(req, res) {
  query("SELECT max(tot_episodes) FROM (SELECT TitleID, COUNT(EpisodeID) AS tot_episodes FROM Title NATURAL JOIN Episode GROUP BY TitleID) AS total_titles;").then(r => {
    res.status(200).send(r)
  }).catch(e => {
    res.status(500)
  })
})

module.exports = router;