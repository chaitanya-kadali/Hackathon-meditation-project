import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import {Link} from 'react-router-dom';  
const Registration = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(user.password.length<6)
        {
            alert('password must contain 6 letters');
         }
        try{
            axios.post('http://localhost:5000/user_inf',user).then(response=>{
                    alert("registered Succesfully!");
                    setUser({name:'',email:'',password:'',age:''});
                    window.location.href = '/login';
                    // LOGIN page redirected from here
                })
        }
        catch(error){
            console.log('Error sending registration request',error);
        }
       
    };
    const goabout=()=>{
        window.location.href='/about'
    }
    return (
        <div className='Registration'>
            <div className='header'>
           <p id='header-medi'>Meditation Timer</p>
           <p id="header-regis">Registration</p>
            <p id='header-about' onClick={goabout}>About</p>  
           </div>

           <center>
            <div className='Registration-form'>
            <form onSubmit={submitHandler} >
                <input
                    type="text"
                    placeholder="Enter the username"
                    onChange={changeHandler}
                    value={user.name}
                    name="name"
                    class="reg-input"
                /><br />    
                <input
                    type="email"
                    placeholder="Enter the email id"
                    onChange={changeHandler}
                    value={user.email}
                    name="email"
                    class="reg-input"/>
                     
                    <br/>
                <input
                    type="password"
                    placeholder="Enter the password"
                    onChange={changeHandler}
                    value={user.password}
                    name="password"
                    class="reg-input"/>
                     

                    <br/>
                <input
                    type="number"
                    placeholder="Enter the age"
                    onChange={changeHandler}
                    value={user.dob}
                    name="age"
                    class="reg-input"
                /><br />
                <button type="submit" id="reg-sub">Submit</button>
            </form>
            <Link className="reg-link" to='/Login'>Already Registered ? click here to Login</Link>
            </div>
        </center>
        </div>
    );
};

export default Registration;