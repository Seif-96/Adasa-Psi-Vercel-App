import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo-gdqArQRt.png"
import "./Navbar.css"
import Blog from './../Blog/Blog';

export default function Navbar() {
  return (
    <>
    <nav className="navbar_container">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="nav-logo d-flex align-items-center gap-3">
          <div className="imgLogo">
            <img src={logo} alt="عدسة" />
          </div>
          <div className="text-white ms-2 text-end">
            <h4 className="mb-0">عدسة</h4>
            <span style={{ fontSize: '13px', color: '#ee600f ' }}>عالم التصوير الفوتوغرافي</span>
          </div>
        </div>

        <div className='nav-menu-wrapper rounded-pill px-2 py-1'>
          <ul className='mb-0 d-flex pe-0 list-unstyled align-items-center'>
            <li><NavLink className="nav-link-item" to="/">الرئيسية</NavLink></li>
            <li><NavLink className="nav-link-item" to="blog">المدونة</NavLink></li>
            <li><NavLink className="nav-link-item" to="info">من نحن</NavLink></li>
          </ul>
        </div>
        <div className="nav-left-actions d-flex align-items-center gap-3">
          <div className="log-icon-wrapper">
            <i className="fa-solid fa-magnifying-glass log-icon"></i>
          </div>
          <NavLink to="blog" className="reading-btn rounded-pill px-4 py-3">
            <span>ابدأ القراءة</span>
          </NavLink>
        </div>

      </div>
    </nav>
    </>
  )
}
