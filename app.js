require('dotenv').config();
const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 8000;

const ACCESSTOKEN = process.env.ACCESSTOKEN;
const BOT_ID = process.env.BOT_ID

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/', (req, res)=>{
	request('https://api.groupme.com/v3/messages/'+req.body.group_id+'/'+ req.body.id
		+'/like?token='+ACCESSTOKEN, (error, response, body)=>{
			console.log("Liked message in group "+req.body.group_id)
		});
});

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});

