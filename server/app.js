require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const { DBURLA } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(`${process.env.DBURLA}`, {useNewUrlParser: true})
  .then(() => {
    console.log(`Connected to Mongo on ${DBURLA}`)
  }).catch(err => {

    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
var whitelist = [
  'http://localhost:3000',
  'https://future-score.herokuapp.com/',
  'http://future-score.herokuapp.com/'
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport')(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))
app.use(flash());
require('./passport')(app);
    
const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const user = require('./routes/user');
app.use('/user', user)

const matches = require('./routes/matches');
app.use('/', matches);

const predictions = require('./routes/predictions');
app.use('/', predictions);

const teams = require('./routes/teams');
app.use('/', teams);

app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;


