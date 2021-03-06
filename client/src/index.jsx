import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
   this.getRepos = this.getRepos.bind(this);
   this.search = this.search.bind(this);
  }

  getRepos() {
    $.ajax({
      method: "GET",
      url: '/repos',
    })
     .done((data) => {
        this.setState({
         repos: data
        })
     });
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    //send post request to server
    //using ajax
    $.ajax({
      method: "POST",
      url: '/repos',
      data: {term},
    })
      .done((data) => {
        console.log('Post request sent')
        this.getRepos();
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      {this.state.repos.length === 0 ? this.getRepos() : null}
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));