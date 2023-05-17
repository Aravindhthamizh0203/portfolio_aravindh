import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

import './Topbar.css'
function Topbar() {
  return (
    <div>
      <Nav fill pills>
        <NavItem>
          <NavLink href='https://github.com/Aravindhthamizh0203' className='navlink'><img width="29" height="29" src="https://img.icons8.com/laces/64/circled-a.png" alt="circled-a" /></NavLink></NavItem>
        <NavItem>
          <NavLink href="/" className='navlink'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className='navlink'>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/skill" className='navlink'>Skill</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/project" className='navlink'>Project</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contect" className='navlink'>Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Topbar