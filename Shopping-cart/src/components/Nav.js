import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import React, { useState } from 'react';

function Nav() {
  
  const [textColor, setTextColor] = useState('black');
  const [textColor1, setTextColor1] = useState('black');


const handleChnageTextColor = (e) => {
  if(e.target.textContent==="Home"){
    setTextColor("red")
    setTextColor1("black")
  }
  else{
    setTextColor("black")
    setTextColor1("red")
  }
}  
  return (
    <nav>
      <ul>
        
        <li>
          <NavLink id="1" style={{color:textColor}} onClick={handleChnageTextColor} to="/Shopping-cart">Home</NavLink>
        </li>
        <li onClick={handleChnageTextColor}>
          <NavLink id="2" style={{color:textColor1}} onClick={handleChnageTextColor} to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
