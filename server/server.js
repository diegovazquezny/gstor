const express = require('express');
const path = require('path');
const app = express();
const dataRouter = require('./routers/dataRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.static(path.join(__dirname, "../client/images/images")));

app.use('/api', dataRouter);
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist', 'index.html')));

// Global Error Handler
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, { message: { err: err } });
  console.log('error Object', errorObj.log);

  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;