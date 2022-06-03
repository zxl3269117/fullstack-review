const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useUnifiedTopology: true }, { useNewUrlParser: true });

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  owner: {
    login: {
      type: String,
      required: true
    },
    avatar_url: String,
    html_url: String,
  },
  private: Boolean,
  html_url: String,
  description: String,
  created_at: String,
  updated_at: String,
  published_at: String,
  size: Number,
  watchers_count: Number,
  forks_count: Number,
  open_issues_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (allRepos) => {
  return Repo.insertMany(allRepos, { ordered: false })
    // .catch( err => console.log(err) )
}

let find = (callback) => {
  Repo.find({}, (err, allRepos) => {
    if(err) {
      callback(err, null);
    } else {
      console.log('db get all repos', allRepos.length);
      var sortedRepos = allRepos.sort((a, b) => {
        if (a.watchers_count > b.watchers_count) {
          return -1;
        }
        if(a.watchers_count < b.watchers_count) {
          return 1;
        }
        return 0;
      });
      callback(null, sortedRepos.slice(0, 25));
    }

  });
}

module.exports.save = save;
module.exports.find = find;
