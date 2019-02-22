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
