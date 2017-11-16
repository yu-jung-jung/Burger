const express = require('express');
// const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

//app.use

var exphbs = require('express-handelbars');

app.engine('handlebars', exphs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(process.env.PORT || 3000);