import './App.css';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import {Route, Routes } from 'react-router-dom';
import Ukraine from './components/Ukraine';
import Europe from './components/Europe';
import USA from './components/USA';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/ukraine' element={<Ukraine />}></Route>
        <Route path='/europe' element={<Europe />}></Route>
        <Route path='/usa' element={<USA />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
