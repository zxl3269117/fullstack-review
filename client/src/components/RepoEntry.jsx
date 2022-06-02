import React from 'react';

const RepoEntry = (props) => (
  <div className="repo-entry">
    <h4><a href={props.repo.html_url}>Name: {props.repo.name}</a></h4>
    <span>Created at: {props.repo.updated_at}</span>
    <span>Watchers: {props.repo.watchers_count}</span>
    <p>Description: {props.repo.description}</p>
  </div>
)

export default RepoEntry;