import React from 'react';

const RepoEntry = (props) => (
  <li className="repo-entry">
    <h4>Repo: <a href={props.repo.html_url} target="_blank">{props.repo.name}</a></h4>
    <span>Created at: {props.repo.updated_at} <br></br> Watchers: {props.repo.watchers_count}</span>
    <p>Description: {props.repo.description}</p>
  </li>
)

export default RepoEntry;