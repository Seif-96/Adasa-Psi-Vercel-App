import React from 'react';
import './Blog.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { PostsContext } from '../../Context/Context';
import App from './../../App';
import Footer from './../Footer/Footer';
import Home from './../Home/Home';
import Personal from './../Personal/Personal';
import { useState } from 'react';
import Lighting from './../Lighting/Lighting';

export default function Blog() {
  const posts = useContext(PostsContext) || [];

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <section className="hero-section1 text-center">
        <div className="container hero-wrapper">
          <div className="mb-4">
            <div className="hero-badge d-inline-flex align-items-center p-2 px-3 rounded-pill">
              <span style={{ marginBottom: '3px', opacity: 0.8, marginRight: '5px' }}>●</span>
              <i className="fa-solid fa-newspaper"></i>
              <span style={{ color: 'rgb(249 115 22)' }}>مدونتنا</span>
            </div>
          </div>
          <h1 className="hero-title mb-4 fa-bold">
            استكشف <span>مقالاتنا</span>
          </h1>

          <p className="hero-desc mb-5">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </section>

      <div className="Nav-tabs p-3">
        <div className="container d-md-flex justify-content-between align-items-center">
          <div className="NavLeft">
            <div className="position-relative">
              <input
                className="rounded-3 ps-5 inp text-white"
                type="text"
                placeholder="بحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i
                className="fa-solid fa-magnifying-glass ic"
                style={{ color: 'rgb(117 117 117)' }}
              ></i>
            </div>
          </div>

          <div className="NavRight">
            <ul className="d-flex gap-2 typ ps-0">
              <li>
                <NavLink
                  to="."
                  end
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setActiveCategory('all')}
                >
                  جميع المقالات
                </NavLink>
              </li>
              <li>
                <NavLink to="lighting" onClick={() => setActiveCategory('lighting')}>
                  إضاءة
                </NavLink>
              </li>
              <li>
                <NavLink to="portrait" onClick={() => setActiveCategory('portrait')}>
                  بورتريه
                </NavLink>
              </li>
              <li>
                <NavLink to="landScape" onClick={() => setActiveCategory('landScape')}>
                  مناظر طبيعية
                </NavLink>
              </li>
              <li>
                <NavLink to="techniq" onClick={() => setActiveCategory('techniq')}>
                  تقنيات
                </NavLink>
              </li>
              <li>
                <NavLink to="Equipment" onClick={() => setActiveCategory('Equipment')}>
                  معدات
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5 bg-black">
        <div className="container">
          <div className="row py-1 g-4">
            <Outlet context={{ searchTerm, activeCategory, posts }} />
          </div>
        </div>
      </div>
    </>
  );
}
