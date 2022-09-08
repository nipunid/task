import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom"
import "./Header.css"

const Header = () => {
    const [activeTab, setActiveTab] = 'Home';
  return (
    <div className="header">
        <p className='logo'>Task Management System</p>
        <div className='header-right'>
            <Link to="/">
                <p className={`${activeTab === 'Home' ? 'active' : ''}`} onClick={()=>setActiveTab("Home")}>Home</p>
            </Link>
            <Link to="/">
                <p className={`${activeTab === 'AddTask' ? 'active' : ''}`} onClick={()=>setActiveTab("AddTask")}>AddTask</p>
            </Link>
            <Link to="/">
                <p className={`${activeTab === 'About' ? 'active' : ''}`} onClick={()=>setActiveTab("About")}>About</p>
            </Link>
        </div>
    </div>
  )
}

export default Header