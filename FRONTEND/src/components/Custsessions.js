import React,{useState} from 'react';
import axios from 'axios';
// import {useParams} from 'react-router-dom'
const Custsessions = (props) => {
    var email1=props
    const [favorite,Setfavorite]=useState({
        title:'',
        min:'',
        sec:'',
        email:email1
    });

    const handleInput=(e)=>{
        const{name,value}=e.target;
        Setfavorite({...favorite,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            favorite.email=email1;
            axios.post('http://localhost:5000/favsess',favorite).then(response=>{
                alert("Favorite Succesfully Added!");
                Setfavorite({title:'',min:'',sec:''});
                /*redirect to loggedin */
            })
        }
        catch(error)
        {
            console.log('Error sending registration request',error);
        }
    };
  return (
    <div className="Addfavorite">
       
        <input type="text" placeholder='Enter the Title' name='title' value={favorite.title} onChange={handleInput} />
        <input type="text" placeholder='Enter number of minutes'name='min' value={favorite.min} onChange={handleInput} />
        <input type="text" placeholder='Enter number of seconds' name='sec' value={favorite.sec} onChange={handleInput} />
       <button onClick={handleSubmit}>Add the favorite</button>
    </div>
  )
}

export default Custsessions;