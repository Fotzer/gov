import './App.css';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import {Navigate, Route, Routes } from 'react-router-dom';
import Ukraine from './components/Ukraine';
import Europe from './components/Europe';
import USA from './components/USA';
import Survey from './components/Survey';
import Languages from './components/Languages';

import { useState } from 'react';

function App() {
  const [uaLanguage, setUaLanguage] = useState(true)

  return (
    <div className="App">
      <Navbar setLanguage_ua={setUaLanguage} language_ua={uaLanguage}/>
      
      
      <Routes>
        <Route path='/' element={<HomePage language_ua={uaLanguage} />}></Route>
        <Route path='/gov/' element={<Navigate to="/" />}></Route>
        <Route path='/ukraine' element={<Ukraine language_ua={uaLanguage} />}></Route>
        <Route path='/europe' element={<Europe language_ua={uaLanguage} />}></Route>
        <Route path='/usa' element={<USA language_ua={uaLanguage} />}></Route>
        <Route path='/survey' element={<Survey language_ua={uaLanguage} />}></Route>
        <Route path='/languages' element={<Languages language_ua={uaLanguage} />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
