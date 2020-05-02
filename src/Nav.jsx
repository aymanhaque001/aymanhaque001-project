import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

  
  return (
    <nav><h3>Favorite Artists</h3>
    <ul className="navlinks">
     <Link to ='/ForEmma'> 
     <li> Bon Iver </li> 
     </Link> 
     <Link to ='/Alexi'> 
     <li> Alexi </li> 
     </Link> 

     <Link to ='/Moses'> 
     <li> Moses_Sumney </li> 
     </Link> 
    </ul>
    </nav>
  );
}

export default Nav;