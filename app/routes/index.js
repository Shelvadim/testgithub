var express = require('express');
var router=express.Router();


router.get('/', function (req, res) {

  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Welcome to meetup</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height:300px;">
    <p>Meetups</p>
    <script src="/reload/reload.js"></script>
    `);
});

module.exports=router;