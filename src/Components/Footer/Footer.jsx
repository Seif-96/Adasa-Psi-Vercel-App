import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Lighting from './../Lighting/Lighting';
import Portrait from './../Portrait/Portrait';
import LandScape from './../Articles/Articles';
import Techniq from './../Techniq/Techniq';

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="footer-grid" >
          <div className="footer-col brand-info">
            <div className="footer-logo d-flex align-items-center gap-3 flex-row">
              <a href='/' className="logo-icon fs-4">ع</a>
              <span className="logo-text ms-2">عدسة</span>
            </div>
            <p className="footer-description">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="social-links d-flex gap-2 flex-row mt-5">
              <span className="icon-placeholder"><i className="fa-brands fa-lg fa-x-twitter"></i></span>
              <span className="icon-placeholder"><i className="fa-brands fa-lg fa-github"></i></span>
              <span className="icon-placeholder"><i className="fa-brands fa-lg fa-linkedin-in"></i></span>
              <span className="icon-placeholder"><i className="fa-brands fa-lg fa-youtube"></i></span>
            </div>
          </div>

        
          <div className="footer-col">
            <div className='d-flex gap-2 align-items-center'>
            <div className='psy'></div>
            <h5 className="footer-title">استكشف</h5>
            </div>
            
            <ul className="list-unstyled mt-3">
              <li className='py-2'><NavLink to="/">الرئيسية</NavLink></li>
              <li className='py-2'><NavLink to="/blog">المدونة</NavLink></li>
              <li className='py-2'><NavLink to="/info">من نحن</NavLink></li>
            </ul>
          </div>

         
          <div className="footer-col">
          <div className='d-flex gap-2 align-items-center'>
            <div className='psy'></div>
            <h5 className="footer-title">التصنيفات</h5>
            </div>
            <ul className="list-unstyled mt-3">
              <li className='py-2'><NavLink to="/blog/Lighting">إضاءة</NavLink></li>
              <li className='py-2'><NavLink to="/blog/Portrait">بورتريه</NavLink></li>
              <li className='py-2'><NavLink to="/blog/LandScape">مناظر طبيعية</NavLink></li>
              <li className='py-2'><NavLink to="/blog/Techniq">تقنيات</NavLink></li>
            </ul>
          </div>


          <div className="footer-col newsletter-col">
          <div className='d-flex gap-2 align-items-center'>
            <div className='psy'></div>
            <h5 className="footer-title">ابقى على اطلاع</h5>
            </div>
        <p className="fo mt-3">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <div className="newsletter-wrapper">
              <input 
                type="email" 
                className="form-control mb-3 text-end rounded-3 " 
                placeholder="أدخل بريدك الإلكتروني" 
              />
              <button className="btn btn-orange hove w-100 rounded-pill py-3 ">اشترك</button>
            </div>
          </div>

        </div>

        <hr className="footer-divider mt-5 mb-4" />

   
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-row-reverse" dir="rtl">
          <div className="footer-bottom-links">
            <a href="#" className="ms-4">سياسة الخصوصية</a>
            <a href="#">شروط الخدمة</a>
          </div>
          <p className="mb-0 fo">
            © 2026 عدسة. صنع بكل <span className="text-orange">🧡</span> جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;