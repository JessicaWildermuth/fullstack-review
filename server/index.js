const express = require('express');
const bodyParser = require('body-parser');
const save = require('../database/index.js')
const getReposByUsername = require('../helpers/github.js')
let app = express();


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function (req, res) {
  getReposByUsername.getReposByUsername(req.body.term, (error, data) => {
    var userRepoData = [];
    data.forEach((repo) => {
      userRepoData.push({owner: repo.owner.login, reponame: repo.name, stargazers: repo['stargazers_count'], lastUpdated: repo['updated_at'], forks: repo['forks_count'], url: repo['html_url'], description: repo.description});
    })
    save.save(userRepoData);
    res.send(userRepoData);
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //sends a request to the db
  //fetches all of the repos
  save.Repo.find({lastUpdated: { $regex: '^202' }, forks: { $gte: 1 }, stargazers: { $gte: 1}}, (error, results) => {
    results.sort(function (a, b) {
      return b.stargazers - a.stargazers;
    });
    console.log(results);
    var listOf25 = results.slice(0, 25);
    res.send(listOf25)
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

