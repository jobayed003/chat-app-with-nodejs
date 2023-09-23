const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { notFoundHandler, errorHandler } = require('./middleware/common/errorHanlder');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static('public'));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routine setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);
// error handling
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('App listening on ', process.env.PORT);
});
