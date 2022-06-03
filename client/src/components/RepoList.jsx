import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => {
  var repoEntries;

  // avoid breaking the app when there's no data from the server
  if (props.repos.length === 0) {
    repoEntries = <div></div>
  } else {
    repoEntries = props.repos.map(repo =>
      <RepoEntry key={repo.id.toString()} repo={repo} />
    )
  }
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos
      <ul className="repo-list">{repoEntries}</ul>
    </div>
  )
}

export default RepoList;