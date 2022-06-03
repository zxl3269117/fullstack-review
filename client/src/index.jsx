import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [
        {
          "id": 18221276,
          "name": "git-consortium",
          "owner": {
            "login": "octocat",
            "avatar_url": "https://avatars0.githubusercontent.com/u/583231?v=3",
            "html_url": "https://github.com/octocat",
          },
          "private": false,
          "html_url": "https://github.com/octocat/git-consortium",
          "description": "This repo is for demonstration purposes only.",
          "created_at": "2014-03-28T17:55:38Z",
          "updated_at": "2016-12-06T13:06:37Z",
          "pushed_at": "2016-10-30T13:43:30Z",
          "size": 190,
          "stargazers_count": 7,
          "watchers_count": 7,
          "language": null,
          "has_issues": true,
          "has_downloads": true,
          "has_wiki": true,
          "has_pages": false,
          "forks_count": 24,
          "mirror_url": null,
          "open_issues_count": 4,
          "forks": 24,
          "open_issues": 4,
          "watchers": 7,
          "default_branch": "master"
        }
      ]
    }

  }

  componentDidMount() {
    $.ajax({
      url: '/repos'
    })
      .done(repos => {
        console.log(repos);
        this.setState({
          repos: repos
        })
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/repos',
      method: 'POST',
      dataType: 'application/json',
      data: { term: term }
    })
      .done(repos => {
        console.log(repos);
        this.setState({
          repos: repos
        })
      })
      .fail(err => {
        console.log(err);
      })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));