import React from 'react';
import Comment from './Comment.jsx';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

const App = () => <Comment author={userInfo} text="Good job!" data={new Date()} />;

export default App;
//
