import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
require('../../sass/app.scss');

const App = () =>(
  <div>
    <h2>Username List:</h2>
    <UserList />
    <hr/>
    <h2>User details:</h2>
    <UserDetail />
  </div>

);


export default App;
