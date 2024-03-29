import React from 'react'
import './Header.css'
import Logo from '../../assets/logo112.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import {Link} from "react-scroll";


const Header = () => {
  const mobile = window.innerWidth<=768?true:false;
  const [menuOpened, setMenuOpened] =  useState(false);
  return (
<div className="header">
<img src={Logo} alt="helo" className="logo"/>
{menuOpened === false && mobile === true ?(
  <div
  style={{backgroundColor:'rgb(66, 64, 64)',cursor:'pointer',borderRadius:'5px'}}
  onClick ={()=> setMenuOpened(true)}
  ><img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}} /></div>
):(
<ul className='header-menu'>
  <li onClick={()=> setMenuOpened(false)}><Link
   onClick={()=> setMenuOpened(false)}
   to='home'
   span={true}
   smooth={true}
  >Home</Link></li>
  <li onClick={()=> setMenuOpened(false)}><Link
  onClick={()=> setMenuOpened(false)}
  to='programs'
  span={true}
  smooth={true}
  >Articles</Link></li>
  <li onClick={()=> setMenuOpened(false)}><Link
   onClick={()=> setMenuOpened(false)}
   to='reasons'
   span={true}
   smooth={true}
   >Why us</Link></li>
  <li onClick={()=> setMenuOpened(false)}><Link
   onClick={()=> setMenuOpened(false)}
   to='plans'
   span={true}
   smooth={true}>Prices</Link></li>
  <li onClick={()=> setMenuOpened(false)}><Link
  onClick={()=> setMenuOpened(false)}
  to='testimonials'
  span={true}
  smooth={true}
  >Testimonials</Link></li>
</ul>
)}
</div> )}

export default Header