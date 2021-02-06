import React, { Component } from 'react';
import UserForm from './UserForm';

class Profile extends Component {
  render() {
    const { userData, handleChange } = this.props;

    return (
      <div className="column">
        <UserForm userData={userData} handleChange={handleChange} />
      </div>
    );
  }
}

export default Profile;
