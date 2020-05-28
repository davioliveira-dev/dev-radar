import React from 'react';

import './styles.css';

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name || dev.github_username}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio || 'Não tenho bio'}</p>
      <a href={`https://github.com/${dev.github_username}`} rel="noopener noreferrer" target="_blank">Acessar perfil do GitHub</a>
    </li>
  );
}

export default DevItem;