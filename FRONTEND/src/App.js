import React from 'react';
import Registration from './components/Registration';
import Dologin from './components/Dologin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Registration/>}/>
      <Route path='/login' element={<Dologin/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;