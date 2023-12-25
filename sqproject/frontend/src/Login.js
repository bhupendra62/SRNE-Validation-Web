import React,{useState}from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import Validation from './LoginValidation'

function Login() {
    const [values,setValues]=useState(
        {
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
       if(errors.email==="" && errors.password===""){
        axios.post('http://localhost:8081/login', values)
        .then(res=> {navigate('/home');
        if(res.data==="Success")
        {
            navigate ('/home');
        }
        else{
            alert("No record existed")
        }
        })
        .catch(err =>console.log(err))
       }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Log In</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter THe E-Mail' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter THe Password' password='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                <p>Terms and Conditions</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Accoutn</Link>
            </form>
            
        </div>
    </div>
  )
}

export default Login;