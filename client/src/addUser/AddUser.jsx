import React from 'react';
import './adduser.css';

const AddUser = () => {
  return (
    <div className='addUser'>
       <h3>Add New User</h3>
       <form className='addUserForm'>
        <div className='inputGroup'>
          <label htmlFor='name'>Name:</label>
          <input 
          type='text'
          id='name'
          name='name'
          autoComplete='off'
          placeholder='Enter your name'
          />
          </div>
          <div className='inputGroup'>
          <label htmlFor='email'>Email:</label>
          <input 
          type='text'
          id='email'
          email='email'
          autoComplete='off'
          placeholder='Enter your email'
          />
          </div>
          <div className='inputGroup'>
          <label htmlFor='address'>Address:</label>
          <input 
          type='text'
          id='address'
          address='address'
          autoComplete='off'
          placeholder='Enter your address'
          />
          </div>
          {/* Let's add a submit button! */}
          <div className='inputGroup'>
          <button type="button" class="btn btn-primary">Submit</button>
          </div>

       </form>
    </div>
  )
}

export default AddUser




