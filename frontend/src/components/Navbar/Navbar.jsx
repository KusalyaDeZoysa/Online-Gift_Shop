import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo"/>
      <ul className="navbar_list">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Catergories")} className={menu==="Catergories"?"active":""}>Catergories</li>
        <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
      </ul>
      
      <div className='navbar-right'>
        <div className='cart'>
            <img src={assets.basket_icon} alt=""/>
            <div className='dot'></div>
        </div>
        <button className="signin">Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
