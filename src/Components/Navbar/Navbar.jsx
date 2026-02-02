import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/logo-GdqARQRt.png';
import './Navbar.css';
import Blog from './../Blog/Blog';

export default function Navbar() {
  const openMenu = () => {
    const openMenuWrapper = document.querySelector('#menu-icon');
    const CloseMenuWrapper = document.querySelector('#close-icon');
    const navLinks = document.querySelector('.nav-links');
    if (openMenuWrapper && CloseMenuWrapper && navLinks) {
      openMenuWrapper.classList.add('d-none');
      CloseMenuWrapper.classList.remove('d-none');
      navLinks.classList.remove('d-none');
    }
  };

  const closeMenu = () => {
    const openMenuWrapper = document.querySelector('#menu-icon');
    const CloseMenuWrapper = document.querySelector('#close-icon');
    const navLinks = document.querySelector('.nav-links');

    if (openMenuWrapper && CloseMenuWrapper && navLinks) {
      openMenuWrapper.classList.remove('d-none');
      CloseMenuWrapper.classList.add('d-none');
      navLinks.classList.add("d-none");
    }
  };
  return (
    <>
      <nav className="navbar_container">
        <div className="container-xxl px-lg-5 d-md-flex justify-content-between align-items-center py-3 overflow-hidden">
          <div className="d-flex justify-content-between align-items-center">
            <div className="nav-logo d-flex align-items-center gap-3">
              <div className="imgLogo">
                <img src={logo} alt="عدسة" />
              </div>
              <div className="text-white ms-2 text-end">
                <h4 className="mb-0">عدسة</h4>
                <span className="d-md-block d-none" style={{ fontSize: '13px', color: '#ee600f' }}>
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </div>
            <div id="menu-icon-wrapper" className="d-md-none fs-5 text-light">
              <i id="menu-icon" className="fa-solid fa-bars" onClick={openMenu}></i>
              <i id="close-icon" className="fa-solid fa-xmark d-none" onClick={closeMenu}></i>
            </div>
          </div>
          <div className="nav-links d-none d-md-flex align-items-center col-md-8 justify-content-between gap-4">
            <div className="nav-menu-wrapper px-2 py-1">
              <ul className="mb-0 d-md-flex flex-column flex-md-row pe-0 list-unstyled align-items-center">
                <li>
                  <NavLink className="nav-link-item" to="/">
                    الرئيسية
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link-item" to="blog">
                    المدونة
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link-item" to="info">
                    من نحن
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-left-actions d-md-flex align-items-center gap-3">
              <div className="log-icon-wrapper d-none d-md-block">
                <i className="fa-solid fa-magnifying-glass log-icon"></i>
              </div>
              <NavLink to="blog" className="reading-btn d-block rounded-pill px-4 py-3">
                <span>ابدأ القراءة</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
