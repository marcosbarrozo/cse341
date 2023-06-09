const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080
const app = express();



app.use(bodyParser.json())
.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin','*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
})
.use('/', require('./routes/'))

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });