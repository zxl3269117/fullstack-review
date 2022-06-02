const express = require('express');
const bodyParser = require('body-parser');
const github = require('../helpers/github.js');
const db = require('../database/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  console.log(req.body.term);

  var username = req.body.term;
  github.getReposByUsername(username)
    .then(response => {
      // console.log('response data', response.data);

      // sort repos in descending order of watchers_count
      var allRepos = response.data;
      var sortedRepos = allRepos.sort((a, b) => {
        if (a.watchers_count > b.watchers_count) {
          return -1;
        }
        if(a.watchers_count < b.watchers_count) {
          return 1;
        }
        return 0;
      });

      return sortedRepos;
    })
    .then(sortedRepos => {
      // add sortedRepos to the DB
      db.save(sortedRepos)
        // .then(raw => {
        //   console.log('raw', raw);
        // })
        // .catch( err => {
        //   console.log(err);
        //   if(err.result.result.nInserted === 0) {

        //   }
        // })
      return sortedRepos.slice(0, 5);
    })
    .then(topRepos => {
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

