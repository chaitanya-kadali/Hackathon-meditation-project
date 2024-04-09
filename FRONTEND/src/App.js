import React from 'react';
import Registration from './components/Registration';
import Dologin from './components/Dologin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Guest from './components/Guest';
import Home from './components/Home';
import Loggedin from './components/Loggedin';
import Howtomedti from './components/Howtomedti';
import Custsessions from './components/Custsessions';
import About from './components/About';
import Autosug from './components/Autosug';
const App = () => {
  return (
  //  
  // <Dologin/>
  // <Registration/>
  // <Guest/>
  // <Home/>
  // <Howtomedti/>
  <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/Registration' element={<Registration/>}/>
     <Route path='/login' element={<Dologin/>}/>
     <Route path='/Guest' element={<Guest/>}/>
     <Route path='/loggedin' element={<Loggedin/>}/>
     <Route path='/loggedin/meditation' element={<Howtomedti/>}/>
     <Route path='/loggedin/addfav' element={<Custsessions.js/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/loggedin/Autosug' element={<Autosug/>}/>


     </Routes>
      </BrowserRouter>
  </>
  
  )
}

export default App;