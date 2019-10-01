import React from 'react';
import { Link } from 'react-router-dom';

import { toTitleCase } from './helpers';

const SideBar = ({ users }) => {
  return (
    <div className="col s3 z-depth-1 App-col-all">
      <div className="row">
        <ul className="list-group">
          {users ? (
            users.map(user => {
              const {
                name: { first, last },
                login: { username },
                phone
              } = user;
              return (
                <li key={phone} className="list-group-item">
                  <Link to={`${username}`}>
                    {`${toTitleCase(first)} ${toTitleCase(last)}`}
                  </Link>
                </li>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
