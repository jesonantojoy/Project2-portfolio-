import React from 'react'
import { Link ,Outlet} from 'react-router-dom';
import "../src/layout.css"
export default function Layout() {
    return (
    <>
     <header id="header">
        <div className="logo">
            <a href="#" id="logo">JESON ANTO JOY</a>
        </div>
        <input type='checkbox' id="click"></input>
        <label form='click' className="mainicon">
            <div className="menu" id="menu">
                <i className="bi bi-list"></i>
            </div>
        </label>
      <nav>
        <ul>
          <li>
            <Link to="Home" className='a'>Home</Link>
          </li>
          <li>
            <Link to="About"className='a'>About</Link>
          </li>
          <li>
            <Link to="Skills"className='a'>Skills</Link>
          </li>
          <li>
            <Link to="Portfolio"className='a'>Portfolio</Link>
          </li>
          <li>
            <Link to="Contact"className='a'>Contact</Link>
          </li>
        </ul>
      </nav>
      </header>
      <Outlet/>
      
    </>
  )
};

