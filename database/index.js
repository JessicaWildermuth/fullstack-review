const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  owner: STRING,
  reponame: STRING,
  stargazers: NUMBER,
  lastUpdated:  STRING,
  forks: NUMBER,
  url:  STRING,
  description:  STRING
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;