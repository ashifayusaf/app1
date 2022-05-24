import React from 'react'
import { NavLink } from 'react-router-dom'
import{BsFillHouseFill} from 'react-icons/bs'
import './Style/style.css'

function Navbar() {
  return (
      <div  className='nav-bar'>
        <h1>React Router dom</h1>
        <div className='navlink'>
            
        <h1><span><BsFillHouseFill/>Welcome</span>Page</h1>
         <NavLink activeClassName="active" className="link" to ="/"> Home</NavLink>
         <NavLink activeClassName="active"className="link" to ="/about"> About</NavLink>
        <NavLink activeClassName="active"className="link" to ="/contact"> Contact</NavLink>
        </div>
       
    </div>
  )
}

export default Navbar