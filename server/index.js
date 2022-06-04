const express = require('express');
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

// Handle post request from client to get top 25 repos on a Github user
app.post('/repos', function (req, res) {
  var username = req.body.term;

  github.getReposByUsername(username)
    .then(response => {
      var allRepos = response.data;
      db.save(allRepos);
    })
    .then(() => {
      // retrieve top 25 repos
      db.find((err, topRepos) => {
        if(err) {
          console.log(err);
        } else {
          res.status(201).json(topRepos);
        }
      })
    })
    .catch( err => console.log('err save data', err) )
});

// Handle get request to access top 25 repos stored in the database
app.get('/repos', function (req, res) {
  db.find((err, topRepos) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).json(topRepos);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

