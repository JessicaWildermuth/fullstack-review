const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  owner: String,
  reponame: String,
  stargazers: Number,
  lastUpdated:  String,
  forks: Number,
  url:  String,
  description:  String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userRepoData) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //take in an array of repos
  //needs to loop through them, and for each object,
  userRepoData.forEach((repo) => {
    Repo.findOneAndRemove({reponame: repo['reponame'], owner: repo['owner']}, (error, data) => {
      if (error) {
        console.log(error, "ERROR");
      } else {
        console.log(data);
      }
    });

    Repo.create(repo, function (err, data) {
      if (err) {
        console.log(error);
      } else {
        console.log('SAVED!');
      }
    // saved!
    });
  });
}

module.exports.save = save;
module.exports.Repo = Repo;