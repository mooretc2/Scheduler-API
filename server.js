const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 44445;

app.use(bodyParser.urlencoded({ extended: true}));

require('./scheduler/app/routes')(app, {});
app.listen(port, () => {
	console.log('We are live on port ' + port);
});
