const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useUnifiedTopology: true }, { useNewUrlParser: true });

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  owner: {
    login: String,
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
    .catch( err => console.log(err) )
}

let find = () => {
  return Repo.find({})
    // .catch( err => console.log(err) );
}

module.exports.save = save;
module.exports.find = find;
