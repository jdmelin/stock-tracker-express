const http = require('http');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes');
const stockRouter = require('./routes/stocks');
const userRouter = require('./routes/user');
const es6Renderer = require('express-es6-template-engine');
const db = require('./models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({ db: db.sequelize });

const app = express();
const server = http.createServer(app);
const port = process.env.PORT;

store.sync();


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
      secure: false,
      maxAge: 2592000,
    },
  })
);

app.use(express.static('public'));
app.use(express.json());

app.use(indexRouter);
app.use(stockRouter);
app.use(userRouter);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
