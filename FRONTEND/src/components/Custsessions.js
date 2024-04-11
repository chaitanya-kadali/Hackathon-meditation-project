import React,{useState} from 'react';
import axios from 'axios';
import './Custsessions.css';

const Custsessions = () => {
    const [favorite,Setfavorite]=useState({
        title:'',
        min:0,
        sec:0,
        email:''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        Setfavorite({ ...favorite, [name]: value });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            // favorite.email=email;
            axios.post('http://localhost:5000/favsess',favorite).then(response=>{
                alert("Favorite Succesfully Added!");
                Setfavorite({title:'',min:'',sec:'',email:''});
                /*redirect to loggedin */
                window.location.href='/loggedin';
            })
        }
        catch(error)
        {
            console.log('Error sending registration request',error);
        }
    };
  return (
    <div className="Addfavorite">
         <div className='addfav-main'>
      <div className='header'>
        <p id='header-medi'>Meditation Timer</p>
        <p id='header-about'>About</p>
      </div>
      </div>
        <center>
           <form class="form" onSubmit={handleSubmit}>
     <input class="form-col" type="text" placeholder='Enter the Title' name='title' value={favorite.title} onChange={changeHandler} />
     <br/>
        <input class="form-col" type="text" placeholder='Enter number of minutes'name='min' value={favorite.min} onChange={changeHandler} />
        <br/>
        <input class="form-col" type="text" placeholder='Enter number of seconds' name='sec' value={favorite.sec} onChange={changeHandler} />
        <br/>
        <input class="form-col" type="text" placeholder='Enter email' name='email' value={favorite.email} onChange={changeHandler} />
       <br/>
       <button id="addfav-btn">Add the favorite</button> 
       </form>
       </center>
    </div>
  )
}

export default Custsessions;