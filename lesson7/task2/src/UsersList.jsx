/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: null,
    };
  }

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let UserList;

    if (this.state.sorting) {
      UserList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      UserList = this.props.users;
    }

    console.log(this.props.users);

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>

        <ul className="users">
          {UserList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
