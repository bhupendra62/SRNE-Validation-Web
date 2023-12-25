import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Validation from './SignupValidation'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const Signup = () => {
    const [values,setValues]=useState(
        {
            name: '',
            email: '',
            password: ''
        }
    )
    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
      setValues(prev=> ({...prev,[event.target.name]: [event.target.value]}))  
    }
    const handleSubmit=(event)=>{
       event.preventDefault(); 
       setErrors(Validation(values));
       if(errors.name==="" && errors.email==="" && errors.password===""){
        axios.post('http://localhost:8081/signup', values)
        .then(res=> {navigate('/');
        })
        .catch(err =>console.log(err))
       }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'> 
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter THe Name' name= 'name'
                    onChange={handleInput}  className='form-control rounded-0'/>
                     {errors.name && <span className='text-danger'>{errors.name}</span>}
                
                </div>

                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter THe E-Mail' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter THe Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                     {errors.password && <span className='text-danger'>{errors.password}</span>}
                
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                <p>Terms and Conditions</p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
            
        </div>
    </div>
  )
}

export default Signup