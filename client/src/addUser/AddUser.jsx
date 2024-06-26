import React from 'react'

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
       </form>
    </div>
  )
}

export default AddUser




