const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  //  const queryText = 'SELCT id, url from favorites';
  //  pool.query(queryText)
  //      .then((result) => {
  //        console.log('favorite GET /route successful', result.rows);
  //        res.sendStatus(results.rows);
  //    })
  //       .catch((err) => {
  //        console.log('Error in Favorites GET /route, err );
  //    })   
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
//  const favorites = req.body.url
//    console.log (favorties)
//
//    const sqlScripts = `INSERT INTO "favortie"
//      ("url")
//    VALUES ($1)`;
//
//    pool.query(sqlScript, [favorites] )
//    .then (dbResult) => {
//      console.log ('favorite is posted')
//        res.sendStatus(200);
//    })
//      .catch((err) => {
//        console.log('Error in Favorites /POST route', err)
//        res.sendStatus(500)
//    });
//    });




  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  //    const queryText = 'DELETE FROM favorites WHERE id=$1;
//    pool.query(queryText, [req.params.id]);
//    .then(() => {
//        console.log('DELETE route Successful');
//        res.sendStatus(200);
//      })
//    .catch((err) => {
//      console.log ('Error in Delete route', err);
//        res.sendStatus(500);
//      });
//  });
  res.sendStatus(200);
});

module.exports = router;
