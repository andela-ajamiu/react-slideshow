const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static('static'));
app.use(bodyParser.json());

app.get('*', (req,res) => {
	res.sendFile(path.resolve(__dirname + '/static/index.html' ));
})

app.listen(3000,() => {
	console.log('App has started on port 3000')
});