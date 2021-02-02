/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
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
    let UsersList;

    if (this.state.sorting) {
      UsersList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      UsersList = this.props.users;
    }

    console.log(this.props.users);

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>

        <ul className="users">
          {UsersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
