const express = require('express');
const router = express.Router();
const axios = require('axios');

let images = {}

router.post('/', (req, res) => {
    console.log('inside of POST ROUTER')
    const search = req.body.newSearch
    let myApiKey = 'pQGe7883TknIlu5EzBp7RCWyUKeMEAGn';
    axios ({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&limit=20&q=${search}}`
    })
    .then((apiRes) => {
        images = apiRes.data;
    })
    .catch((apiErr) =>{
        console.log(apiErr)
    })
})

router.get('/', (req, res) => {
    res.send(images)
    console.log('########################################')
    console.log('IN GET REQUEST')
})

module.exports = router;