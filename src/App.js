import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Nav from './components/UI/Nav';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  return (
    <div className=''>
      <Nav />
      <AddUser addUser={addUserHandler} />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
