/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const usersList = (this.state.value === ''
      ? this.props.users
      : this.props.users.filter(user =>
          user.name.toLowerCase().includes(this.state.value.toLowerCase()),
        )
    ).map(el => <User key={el.id} {...el} />);
    return (
      <div>
        <Filter filterText={this.state.value} count={usersList.length} onChange={this.onChange} />
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UsersList;
