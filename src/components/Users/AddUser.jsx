import React, { useState } from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    // Adds a User to the state, in the context it's called from
    props.addUser();

    setEnteredUsername('');
    setEnteredAge('');
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input value={enteredUsername} id='username' type='text' onChange={userNameChangeHandler} />
        </div>
        <div>
          <label htmlFor='age'>Age (years)</label>
          {/* <input value={enteredAge} id='age' inputMode='numeric' pattern='[0-9]*' onChange={ageChangeHandler} /> */}
          <input value={enteredAge} id='age' type='text' onChange={ageChangeHandler} />
        </div>
        {/* <div>
          <label htmlFor='area'>Review of W3Schools:</label>

          <textarea id='areaText' name='area' rows='4' cols='50'></textarea>
        </div> */}
        <div className='button'>
          <button type='submit'>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
