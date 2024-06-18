import React from 'react'

const User = () => {
  return (
    <div className='userTable'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>John@gmail.com</td>
            <td>USA</td>
            <td>Update. Delete.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default User



