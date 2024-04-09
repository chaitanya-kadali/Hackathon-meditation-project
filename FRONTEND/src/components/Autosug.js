import React, { useState } from 'react';
import './Autosug.css'

function Autosug() {
  const [age, setAge] = useState('');

  const handleAgeInput = (event) => {
    setAge(event.target.value);
  };

  const checkAge = () => {
    if(5<=age && age <=12)
        {
            alert("7 min");
        }
        else if(13<=age<=18)
        {
            alert("15 min");
        }
        else if(19<=age<=30)
        {
            alert("25 min");
        }
        else if(31<=age && age<=65)
        {
            alert("30 min");
        }
        else if(66<=age)
        {
            alert("25 min");
        }
    }       
  

  return (
    <div>
        <center>
        <div className='header'>
       <p id='header-medi'>Meditation Timer</p>
       <p id='header-about'>About</p>
     </div>
      <label>
        Enter your age:
        <input type="number" value={age} id="enter-it" onChange={handleAgeInput} />
      </label>
      <br></br>
      <button onClick={checkAge}>Check Age</button>
      </center>
    </div>
  );
}


export default Autosug;