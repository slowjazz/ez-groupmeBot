require('dotenv').config();
const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const ACCESSTOKEN = process.env.ACCESSTOKEN;
const BOT_ID = process.env.BOT_ID

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/post', (req, res)=>{
	console.log(req.body);
	request('https://api.groupme.com/v3/messages/'+req.body.group_id+'/'+ req.body.id
		+'/like?token='+ACCESSTOKEN, (error, response, body)=>{
			console.log("Liked message in group "+req.body.group_id)
		});
});

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});

