import React,{useState} from 'react'; 
import './Dologin.css'
// import {Link} from 'react-router-dom'
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
  // runnning clean till here
  try {
    const response = await axios.post('http://localhost:5000/login', user);
   
    if (response.data.success) {
      alert("Logged in successfully!");
      window.location.href='/loggedin/${user.email}'
      // Perform additional actions upon successful login
    } 
    // else {
    //   // Handle unsuccessful login (optional)
    //   alert("Login failed. Please try again.");
    // }
  } catch (error) {
    console.error('Error by sai venkat occurred:', error);
    alert("invalid login details , please try again");
  }

}
// const submitHandler=()=>
// {
//   alert("clicked submit button!");
// }
  return (
    <div className='signup-div'>
      <center>
      <form onSubmit={submitHandler} >
        <input 
        type="text"
        placeholder='Enter User Id'
        value={user.email}
        name="email"
        onChange={changeHandler}/>
        <br/>
         <input 
        type="password"
        placeholder='Enter Password'
        value={user.password}
        name="password"
        onChange={changeHandler}/>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
      <br/>
      <></>
      {/* <Link to='/'>Not Registred? Go to register</Link> */}
      </center>
    </div>
  )
}

export default Dologin;