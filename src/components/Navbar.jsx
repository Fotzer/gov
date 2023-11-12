import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  function setUkrainian() {
    props.setLanguage_ua(true)
  }

  function setEnglish() {
    props.setLanguage_ua(false)
  }

  return ( 
    <div className="navbar-content">
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/"><h1 className='navbar-item navbar-home'>{props.language_ua ? "Головна" : "Home"}</h1></NavLink>
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/Ukraine"><h2 className='navbar-item navbar-region'>{props.language_ua ? "Україна" : "Ukraine"}</h2></NavLink>
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/Europe"><h2 className='navbar-item navbar-region'>{props.language_ua ? "Європа" : "Europe"}</h2></NavLink>
      <NavLink style={state => ({textDecoration: state.isActive ? "underline" : "none"})} className='navbar-link' to="/USA"><h2 className='navbar-item navbar-region'>{props.language_ua ? "Америка" : "USA"}</h2></NavLink>

      <p onClick={setUkrainian} class={props.language_ua ? "navbar_language underline navbar-item first" : "navbar_language navbar-item first"}>Ukrainian</p>
      <p onClick={setEnglish} class={props.language_ua ? "navbar_language navbar-item" : "navbar_language underline navbar-item"}>English</p>
    </div>
  );
}

export default Navbar;