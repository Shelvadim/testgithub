var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));




var server = app.listen(app.get('port'), function () {
  console.log('listening on port 3000!'+app.get('port'));
});

reload(server, app);