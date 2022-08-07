import React from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='username'>Username: </label>
          <input id='username' type='text' />
        </div>
        <div>
          <label htmlFor='age'>Age (years)</label>
          <input id='age' type='text' />
        </div>
        <div>
          <label htmlFor='area'>Review of W3Schools:</label>

          <textarea id='areaText' name='area' rows='4' cols='50'></textarea>
        </div>
        <div className='button'>
          <button type='submit'>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
