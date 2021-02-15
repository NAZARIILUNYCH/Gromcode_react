/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  // input: init state
  // output: array (state value, function to update state)
  const [userInfo, setUserInfo] = useState({
    avatar: null,
    name: null,
    location: null,
  });

  const { userId } = useParams();

  // callback
  // input: func/array
  // output: undefined
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;

        setUserInfo({
          avatar: avatar_url,
          name,
          location,
        });
      });
    // TODO make error handling
  }, [userId]);

  const { avatar, name, location } = userInfo;

  if (!avatar || !name || !location) {
    return null;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
