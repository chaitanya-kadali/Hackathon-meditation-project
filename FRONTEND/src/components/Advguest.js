import React, { useState, useEffect ,useRef } from 'react';
import './Advguest.css';
import audioFile1 from './media/bell-1.wav'
import audioFile2 from './media/bell-2.wav'
import audioFile3 from './media/bell-3.mpeg'
const Advguest= () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedBell, setSelectedBell] = useState('bell1'); // Default selected radio button
  const audioRef1 = useRef(new Audio(audioFile1)); 
  const audioRef2 = useRef(new Audio(audioFile2));
  const audioRef3 = useRef(new Audio(audioFile3));
  
  useEffect(() => {
    let interval;
    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds(totalSeconds => totalSeconds - 1);
      }, 1000);
    } else if (totalSeconds === 0 && isRunning) {
      clearInterval(interval);
      setIsRunning(false);
      switch (selectedBell) {
        case 'bell1':
          audioRef1.current.play();
          break;
        case 'bell2':
          audioRef2.current.play();
          break;
        case 'bell3':
          audioRef3.current.play();
          break;
        default:
          break;
      }
    }
   

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  useEffect(() => {
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
  }, [totalSeconds]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const handleMinuteChange = (e) => {
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes);
    setTotalSeconds(newMinutes * 60 + seconds);
  };
  const handleMinuteChange1= (e) => {
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes);
    setTotalSeconds(newMinutes * 60);
  };

  const handleSecondChange = (e) => {
    const newSeconds = parseInt(e.target.value);
    setSeconds(newSeconds);
    setTotalSeconds(minutes * 60 + newSeconds);
  };
  const handleBellChange = (e) => {
    setSelectedBell(e.target.id);
  };


  return (
    <div className='Guest'>
     <div className='header'>
       <p id='header-medi'>Meditation Timer</p>
       <p id='header-about'>About</p>
     </div>
     <div className='navbar'>

     </div>
     <center>
        <div className='timer'>
      <p id='timer-time'>{minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</p>
      <div>
        <label htmlFor="minutes">Min: </label>
        <input id="minutes" type="range" min="0" max="120" step="1" value={minutes} onChange={handleMinuteChange} />
      </div>
      <div>
        <label htmlFor="seconds">Sec: </label>
        <input id="seconds" type="range" min="0" max="59" step="1" value={seconds} onChange={handleSecondChange} />
      </div>
      <button id='button-str' onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button id='button-reset' onClick={handleReset}>Reset</button>
      <div className='button-timer'></div>
      <button className='button-minset' onClick={handleMinuteChange1} value={5} >5min</button>
      <button  className='button-minset' onClick={handleMinuteChange1} value={10} >10min</button>
      <button  className='button-minset' onClick={handleMinuteChange1} value={15} >15min</button>
      <button  className='button-minset' onClick={handleMinuteChange1} value={30} >30min</button>
      <br/>
      <input type='radio' className="bells" id="bell1" name='bell'onChange={handleBellChange}/>
      <label for="bell1">Bell 1</label>
      <input type='radio' className="bells" id="bell2" name='bell'onChange={handleBellChange}/>
      <label for="bell2">Bell 2</label>
      <input type='radio' className="bells" id="bell3" name='bell'onChange={handleBellChange}/>
      <label for="bell3">Bell 3</label>
      </div>

    </center>
    </div>
  );
};

export default Advguest;
