const express = require('express');
const app = express();
const port = 2828;

app.listen(port, function (){
    console.log('server is up on:', port);
});

app.use(express.static('server/public'));