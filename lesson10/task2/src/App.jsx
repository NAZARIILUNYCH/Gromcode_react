import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class Page extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Form',
    },
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });

    console.log(this.state.userData);
  };

  render() {
    const { userData } = this.state;

    return (
      <div className="page">
        <h1 className="title">
          Hello, {userData.firstName} {userData.lastName}
        </h1>
        <main className="content">
          <ShoppingCart userData={this.state.userData} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default Page;
