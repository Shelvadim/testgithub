var express = require('express');
var router=express.Router();


router.get('/', function (req, res) {
  var data = req.app.get('appData');
  var pagePhotos=[];

data.speakers.forEach(function(item){
  pagePhotos = pagePhotos.concat(item.artwork);
});

  res.render('index',{
    pageTitle:'Home',
    artwork: pagePhotos,
    pageID:'home'
  });

  /*res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Welcome to meetup</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height:300px;">
    <p>Meetups</p>
    <script src="/reload/reload.js"></script>
    `);*/
});

module.exports=router;
