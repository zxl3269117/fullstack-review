const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const github = require('../helpers/github.js');
const data = require('../data.json');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  console.log(req.body.term);

  var username = req.body.term;
  github.getReposByUsername(username)
    .then(response => {
      console.log(response.data);
      // sort data

      // return sorted data

    })
    .then(sortedRepos => {
      // add sortedRepos to the DB
      // return sortedRepos.splice(0,  24)
    })
    .then(topRepos => {
      // send res with topRepos
      res.status(201).json(topRepos);
    })
    .catch( err => console.log(err) )
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

