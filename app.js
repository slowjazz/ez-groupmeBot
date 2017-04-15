require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const ACCESSTOKEN = process.env.ACCESSTOKEN;
const BOT_ID = process.env.BOT_ID

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', (req, res)=>{
	console.log(req.body);
})

app.listen(port, function () {
  console.log('Example app listening on port' + port);
})



// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));