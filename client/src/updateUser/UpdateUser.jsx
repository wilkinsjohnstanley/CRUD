import React, {useState, useEffect} from 'react';
import './updateuser.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
    const users = {
      name:"",
      email:"",
      address:"",
    };

    const[user, setUser] = useState(users)
    const navigate = useNavigate();
    const {id} = useParams();

    const inputHandler = (e) =>{
      const {name, value}=e.target
      console.log(name, value);
      setUser({...user, [name]:value})
    };
    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/user/${id}`)
            .then((response) =>{
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[id]);


// function to submit the form.
const submitForm = async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8000/api/user", user)
  .then((response)=>{
    // console.log("User created successfully.")
    toast.success(response.data.message, {position:"top-center"})
    navigate("/");
  })
  .catch((error)=>{
    console.log(error)
  })
}

  return (
    <div className='updateUser'>

       <h3>Update User</h3>
{/* change from button tag to link tag with to="/" to take the user back to the homepage */}
       <Link to="/" type="button" class="btn btn-secondary">
       <i class="fa-solid fa-backward"></i> Back
         
        </Link>

       <form className='updateUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor='name'>Name:</label>
          <input 
          type='text'
          id='name'
          value={user.name}
          onChange={inputHandler}
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
          value={user.email}
          onChange={inputHandler}
          name='email'
          autoComplete='off'
          placeholder='Enter your email'
          />
          </div>
          <div className='inputGroup'>
          <label htmlFor='address'>Address:</label>
          <input 
          type='text'
          id='address'
          value={user.address}
          onChange={inputHandler}
          name='address'
          autoComplete='off'
          placeholder='Enter your address'
          />
          </div>
          {/* Let's add a submit button! */}
          <div className='inputGroup'>
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>

       </form>
    </div>
  )
}

export default UpdateUser




