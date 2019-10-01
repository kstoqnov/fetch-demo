import React from 'react';

import { toBookCase, toTitleCase } from './helpers';

const Card = ({ user }) => {
  if (!user) {
    return (
      <div>
        <p>Please select a user</p>
      </div>
    );
  }

  const {
    email,
    location: { street },
    login: { username },
    name: { first, last },
    phone,
    picture: { large }
  } = user;

  return (
    <div>
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-img-top" src={large} alt={username} />
        <div className="card-body">
          <h4 className="card-title">
            {`${toTitleCase(first)} ${toTitleCase(last)}`}
          </h4>
          <div className="card-text">
            <p>
              <strong>Username:</strong> {username}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Address:</strong> {toBookCase(street)}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
