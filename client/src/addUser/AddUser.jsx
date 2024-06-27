import React from 'react';
import './adduser.css';
import {Link} from 'react-router-dom';

const AddUser = () => {
  return (
    <div className='addUser'>

       <h3>Add New User</h3>
{/* change from button tag to link tag with to="/" to take the user back to the homepage */}
       <Link to="/" type="button" class="btn btn-secondary">
       <i class="fa-solid fa-backward"></i> Back
         
        </Link>

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




