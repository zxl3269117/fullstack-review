import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => {
  // console.log(props.repos);
  var repoEntries = props.repos.map(repo =>
    // console.log(repo);
    <RepoEntry key={repo.id.toString()} repo={repo} />
  )
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      <div className="repo-owner">
        <img src={props.repos[0].owner.avatar_url} alt="owner's avatar" height="50" width="50" />
        <p>{props.repos[0].owner.login}</p>
      </div>
      <ul className="repo-list">{repoEntries}</ul>
    </div>
  )
}

export default RepoList;