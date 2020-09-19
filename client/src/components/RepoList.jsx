import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <p>Top 25 GitHub Repos </p>
    {props.repos.length > 0
    ? props.repos.map((repo) => {
      // var values = Object.values(repo);
      // values.shift();
      // var keys = Object.keys(repo);
      // var url = keys.indexOf('url');
      // url = values[url];
      return <div key={repo['reponame']}>
      <p key={`${repo['owner']} ${repo['_id']}`}> {repo.owner} </p>
      <p key={repo['reponame']}> {repo['reponame']}</p>
      <p key={'repoStargazers'}> {repo.stargazers} </p>
      <p key={'repoForks'}>{repo.forks}</p>
      <p key={'repoLastUpdated'}>{repo.lastUpdated}</p>
      <p key={'repoURL'}>{repo.url}</p>
      <p key={'repoDescriptio'}>{repo.description}</p>
      </div>
    })
    : null
  }
  </div>
)

export default RepoList;
