// server here
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes/user');

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); //encrypting url

//app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, '../client')));

app.use('/user', routes);

app.use((req, res, next) => res.status(404).send('Page not found.'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    //this is console logged for developers
    log: 'Express error handler caught unknown middleware error',
    //status code sent to client
    status: 400,
    //response that client will see in inspect/errors
    message: { err: 'An error occurred' },
  };
  //global err handler will create a new err combining midlleware err and globar err
  //the later arg will override the previous arg.
  //anything in err will override defaultErr
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
