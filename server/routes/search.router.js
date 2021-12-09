const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', (req, res) => {
    console.log('inside of GET ROUTER')
    const myApiKey = '2MDETT6PI8G0EDUc9fXbpLS77nOT9miW';
    axios ({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/random?api_key=${myApiKey}`
    })
    .then((apiRes) => {
        res.send(apiRes.data);
    })
    .catch((apiErr) =>{
        console.log(apiErr)
    })
})

module.exports = router;