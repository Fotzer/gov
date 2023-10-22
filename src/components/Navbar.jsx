import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-content">
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/"><h1 className='navbar-item navbar-home'>Home</h1></NavLink>
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/Ukraine"><h2 className='navbar-item navbar-region'>Ukraine</h2></NavLink>
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/Europe"><h2 className='navbar-item navbar-region'>Europe</h2></NavLink>
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/USA"><h2 className='navbar-item navbar-region'>USA</h2></NavLink>
    </div>
  );
}

export default Navbar;