const express = require('express');
const request = require('request');

const apiUrl = url => `https://api.abalin.net${url}`;
const app = express();

app.use('/api', (req, res) => {
    const url = apiUrl(req.url);
    req.pipe(request(url)).pipe(res);
});
app.use('/', express.static('src'));

app.listen(process.env.PORT || 3000);
