const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number, // will be used to search for duplicate repos
  name: String,
  owner: {
    login: String,
    avatar_url: String,
    html_url: String,
  },
  private: Boolean,
  html_url: String,
  description: String,
  // created_at: String,
  updated_at: String,
  // published_at: String,
  size: Number,
  watchers_count: Number,
  forks_count: Number,
  open_issues_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;