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

  }

  componentDidMount() {
    $.ajax({
      url: '/repos'
    })
      .done(repos => {
        this.setState({
          repos: repos
        })
      })
      .fail(err => {
        console.log('failed the get when mounting compoenent', err);
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/repos',
      method: 'POST',
      data: { term: term }
    })
      .done((res) => {
        $.ajax({
          url: '/repos'
        })
          .done(repos => {
            this.setState({
              repos: repos
            })
          })
          .fail(err => {
            console.log('fail to get repos after post with search', err);
          })
      })
      .fail(err => {
        console.log('failed the post with search', err);
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