import React,{useState} from 'react'; 
import './Dologin.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dologin= () => {
  const [user,setUser]=useState({email:'',password:''});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
}; 
const submitHandler= async(e)=>{
  e.preventDefault();
  if(user.password.length<6)
  {
    alert('password must contain 6 letters');
  }
  
  try {
    const response = await axios.post('http://localhost:5000/login', user);
   
    if (response.data.success) {
      alert("Logged in successfully!");

      window.location.href=`/loggedin?email=${user.email}`;        // throwing email to logged in
    } 
  } catch (error) {
    console.error('Error occurred:', error);
    alert("invalid login details , please try again");
  }
 
}
const gotoab=()=>{
  window.location.href='/about';

}

  return (
    <div className='signup-div'>
       <div className='header'>
       <p id='header-medi'>Meditation Timer</p>
       <p id='header-about' onClick={gotoab}>About</p>
     </div>
      <center>  
        <div className='login-form'>
      <form onSubmit={submitHandler} >
        <input 
        type="text"
        placeholder='Enter Email Id'
        value={user.email}
        name="email" 
        className="login-input"
        onChange={changeHandler}/>
        <br/>
         <input 
        type="password"
        placeholder='Enter Password'
        value={user.password}
        name="password"
        className="login-input"
        onChange={changeHandler}/>
        <br/>
        <br/>
        <button id="login-sub">Submit</button>
      </form>
      <Link id="login-link" to='/Registration'>Not Registred? Go to register</Link>
      </div>
      <br/>
      <></>
      
      </center>
    </div>
  )
}

export default Dologin;