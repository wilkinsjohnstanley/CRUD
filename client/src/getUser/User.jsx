import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from 'axios'

const User = () => {
// we will first define variables
//users = state of the component
//setUsers = allows you to update what is stored in the users variable
//{useState} is automatically added to the import statement for us when we type useState 
const [users, setUsers] = useState([])
//{useEffect} is automatically added to the import statement for us when we type it
useEffect(()=>{
  const fetchData = async()=>{
    try { 
      //get data from endpoint in backend and axios
      //axios is not automatically added, please write import statement yourself
      //const response is our variable to store the response
      const response = await axios.get("http://localhost:8000/api/users")
      //apply the data using setUsers and take the data as an argument
      setUsers(response.data)
    } catch (error) {
      console.log("Error while fetching data", error)
    }
  };
  //initializes the data fetching process
  fetchData()

  //empty array [] ensures it only runs once
},[]);


  return (
    <div className='userTable'>

<button type="button" class="btn btn-primary">
  Add User <i class="fa-solid fa-user-plus"></i>
  </button>

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
          {/* we will use the math function to iterate thru the array */}
          {users.map((user, index)=>{
            return (
            <tr>
            <td>1</td>
            <td>John</td>
            <td>John@gmail.com</td>
            <td>USA</td>
            <td className='actionButtons'>
            <button type="button" class="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></button>
            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            
            </td>
          </tr>);
          })}
          
        </tbody>
      </table>
    </div>
  )
}
export default User



