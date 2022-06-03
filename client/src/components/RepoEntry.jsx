import React from 'react';

const RepoEntry = (props) => (
  <li className="repo-entry">
    <h3>Repo: <a href={props.repo.html_url} target="_blank">{props.repo.name}</a></h3>
    <img src={props.repo.owner.avatar_url} alt="owner's avatar" height="70" width="70" />
    <div className="repo-info">
      <p>Owner: <em>{props.repo.owner.login}</em>
      <br></br>
      <span>Created at: <em>{props.repo.created_at}</em> </span>
      <span>Updated at: {props.repo.updated_at}</span>
      <span>Watchers: {props.repo.watchers_count}</span>
      <br></br>
      <b>Description: </b>{props.repo.description}</p>
    </div>

  </li>
)

export default RepoEntry;