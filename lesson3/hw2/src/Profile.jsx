/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import moment from 'moment';
import App from './App';

const Profile = props => {
  const dateFormater = moment(props.birthDate).format('DD MMM YY');

  return (
    <div className="profile__box">
      <div className="profile__name">
        {props.firstName} {props.lastName}
      </div>
      <div className="profile__birth">Was born {dateFormater} in London</div>
    </div>
  );
};

export default Profile;
