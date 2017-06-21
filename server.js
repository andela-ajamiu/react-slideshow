const express = require ('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/',(res,req) => {
	res.send('Hello');
})

app.listen(3000,() => {
	console.log('App has started on port 3000')
});