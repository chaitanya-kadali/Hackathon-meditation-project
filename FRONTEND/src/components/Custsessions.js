import React,{useState} from 'react';
import axios from 'axios';
const Custsessions = () => {
    const [favorite,Setfavorite]=useState({
        title:'',
        min:0,
        sec:0,
        email:''
    });

    const handleInput=(e)=>{
        const{name,value}=e.target;
        Setfavorite({...favorite,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            // favorite.email=email;
            axios.post('http://localhost:5000/favsess',favorite).then(response=>{
                alert("Favorite Succesfully Added!");
                Setfavorite({title:'',min:'',sec:'',email:''});
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
           <form>
     <input type="text" placeholder='Enter the Title' name='title' value={favorite.title} onChange={handleInput} />
        <input type="text" placeholder='Enter number of minutes'name='min' value={favorite.min} onChange={handleInput} />
        <input type="text" placeholder='Enter number of seconds' name='sec' value={favorite.sec} onChange={handleInput} />
        <input type="text" placeholder='Enter email' name='email' value={favorite.email} onChange={handleInput} />
       <button onClick={handleSubmit}>Add the favorite</button> 
       </form>
    
     </div>
  )
}

export default Custsessions;