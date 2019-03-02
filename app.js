const express = require('express');
const morgan = require('morgan');
const uuid = require('uuid');

const app = express();


//routes
const blogPostRouter = require('./routes/blog-post');


//app.use
app.use(express.json());
app.use(morgan('common'));

app.use('/blog-post', blogPostRouter);

//server setup
app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err)
    });
  });
}


function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

