import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { PostsContext } from "./../../Context/Context";
import { Nav } from 'react-bootstrap';


export default function Home() {

  const posts = useContext(PostsContext) || [];
  
  const categories = [
    { name: "إضاءة", path: "lighting", count: 3, color: "emerald", icon: "fa-gear" },
    { name: "بورتريه", path: "portrait", count: 3, color: "purple", icon: "fa-user" },
    { name: "مناظر طبيعية", path: "landScape", count: 2, color: "blue", icon: "fa-mountain-sun" },
    { name: "تقنيات", path: "techniq", count: 5, color: "orange", icon: "fa-sliders" },
    { name: "معدات", path: "Equipment", count: 3, color: "emerald", icon: "fa-gear" }
  ];

  return (
    <>
  <section className="hero-section text-center">
        <div className="container hero-content-wrapper">
          <div className="mb-4">
            <div className="hero-badge d-inline-flex align-items-center p-2 px-3 rounded-pill">
              <span style={{marginBottom:"2px" , opacity: 0.5, marginRight: '5px' }}>●</span>
              <span
                className="spinner-grow"
                role="status"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#ff8c00',
                  marginLeft: '10px'
                }}
              ></span>
              <span style={{ color: 'rgb(249 115 22)' }}>مرحبًا بك في عدسة</span>
            </div>
          </div>

          <h1 className="hero-title mb-4 fa-bold">
            اكتشف <span>فن</span> <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="hero-desc mb-5">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
            <NavLink to='blog' className="hero-btn-main rounded-pill gap-3">
              استكشف المقالات  <i className="p-1 fa-solid fa-arrow-left-long"></i>
            </NavLink>
            <NavLink to='info' className="gap-2 rounded-pill hero-btn-outline d-flex justify-content-center align-items-center">
              <span style={{fontSize :"1.4rem"}}> ⓘ </span> اعرف المزيد
            </NavLink>
          </div>

          <div className="row justify-content-center mt-5 g-0">
            <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-newspaper fa-2xl mb-4"></i>
                <h3>50+</h3>
                <p>مقالة</p>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-users fa-2xl mb-4"></i>
                <h3>10+ألف</h3>
                <p>قارئ</p>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-folder-open fa-2xl mb-4"></i>
                <h3>4</h3>
                <p>تصنيفات</p>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-pen-nib fa-2xl mb-4"></i>
                <h3>6</h3>
                <p>كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
   

      <section className='bage-two'>
        <div className='container'>

          <div className='d-flex justify-content-between align-items-center mb-4'>
            <div>
              <div className="hero-badge d-inline-flex align-items-center p-2 px-3 rounded-pill mb-3">
                <span style={{ opacity: 0.5 }}>●</span>
                <span
                  className="spinner-grow"
                  role="status"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#ff8c00',
                    marginLeft: '10px'
                  }}
                ></span>
                <span style={{ color: 'rgb(215 115 22)' }}>مميز</span>
              </div>

              <h2 className='hea text-white'>مقالات مختارة</h2>
              <p className='hea1'>محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <div className='rounded-4 ro'>
              <NavLink className='text-white' to="blog">
                عرض الكل <i className="fa-solid fa-angle-left"></i>
              </NavLink>
            </div>
          </div>

          {posts.slice(0, 3).map((post) => (
  <NavLink
    key={post.id}
    to={`/personal/${post.slug}`} 
    className="text-decoration-none"
  >
    <article className="imge container-fluid p-0 mb-4">
      <div className="row g-0 h-100">
        <div className="col-md-6 position-relative h-100 order-md-1 overflow-hidden">
          <img src={post.image} alt="logo" className="article-img" />
          {post.featured && (
            <div className="abs position-absolute rounded-pill d-flex align-items-center gap-1">
              <i className="fa-solid fa-star fa-sm"></i> مميز
            </div>
          )}
        </div>

        <div className="col-md-6 headLeft d-flex flex-column justify-content-center p-4 order-md-2">
          <div className="d-flex gap-3 align-items-center mb-3 w-100">
            <span className="category-tag rounded-pill">
              {post.category}
            </span>
            <span className="read-time">
              <i className="fa-regular fa-clock"></i> {post.readTime}
            </span>
          </div>

          <h2 className="text-white mt-3 wh">{post.title}</h2>
          <p className="hea1 mt-3">{post.excerpt}</p>

          <div className="mt-auto d-flex justify-content-between mb-3">
            <div className="d-flex gap-3">
              <div className="position-relative">
                <img
                  src={post.author.avatar}
                  alt="author"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <span className="ps position-absolute translate-middle p-2 border border-dark rounded-circle"></span>
              </div>

              <div>
                <span className="d-block text-white mb-1">
                  {post.author.name}
                </span>
                <span style={{ color: "rgb(93 89 88)" }}>
                  {post.date}
                </span>
              </div>
            </div>
            <span className="read-article">
              اقرأ المقال <i className="fa-solid fa-arrow-left-long"></i>
            </span>
          </div>
        </div>

      </div>
    </article>
  </NavLink>
))}



        </div>
      </section>


      <section className="topic-section">
  <div className="section-header">
  <div className="hero-badge d-inline-flex align-items-center  px-3 rounded-pill mb-3">
                <span style={{ opacity: 0.5 }}>●</span>
                <span
                  className="spinner-grow"
                  role="status"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#ff8c00',
                    marginLeft: '10px'
                  }}
                ></span>
                <span style={{ color: 'rgb(215 115 22)' }}>التصنيفات</span>
              </div>
    <h2 className='f1'>استكشف حسب الموضوع</h2>
    <p className='hea1'>اعثر على محتوى مصمم حسب اهتماماتك</p>
  </div>

  <div className="topic-grid container">
  {categories.map((cat, index) => (
    <NavLink
      key={index}
      to={`/blog/${cat.path.toLowerCase()}`} 
      className={`topic-card card-${cat.color}`}
    >
      <div className="icon-box">
        <i className={`fa-solid ${cat.icon}`}></i>
      </div>
      <h3>{cat.name}</h3>
      <span>{cat.count} مقالة</span>
    </NavLink>
  ))}
</div>



</section>
 

<div className="main-container py-5 px-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-5 text-end flex-wrap-reverse" dir="rtl">
          <div className="header-text">
             <div className="hero-badge d-inline-flex align-items-center  px-3 rounded-pill mb-3">
                <span style={{ opacity: 0.5 }}>●</span>
                <span
                  className="spinner-grow"
                  role="status"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#ff8c00',
                    marginLeft: '10px'
                  }}
                ></span>
                <span style={{ color: 'rgb(215 115 22)' }}>الاحدث</span>
              </div>
            <h1 className="main-title mb-2 hea">أحدث المقالات</h1>
            <p className="sub-title">محتوى جديد طازج من المطبعة</p>
          </div>
          <NavLink to="/blog" className="view-all-link mb-3">عرض جميع المقالات <i className="fa-solid fa-arrow-left"></i></NavLink>
        </div>


        <div className="row g-4">
          {posts.slice(3, 6).map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
  <NavLink to={`/personal/${post.slug}`}  className="custom-card h-100 border-0 text-decoration-none">
  
  <div className="card-img-wrapper overflow-hidden">
    <img src={post.image} alt={post.title} className="card-img-custom  position-relative" />
    <div className='position-absolute psDesc rounded-pill d-flex justify-content-center align-items-center'>
      {post.category}</div>
  </div>

  <div className="card-body-custom text-end p-4">
    <div className="article-desc d-flex gap-3 mb-3">
      <span className="time-info">
        <i className="far fa-clock ms-1"></i> {post.readTime}
      </span>
      <span className="date-info"> {post.date}</span>
    </div>
    <h3 className="article-title mb-3">{post.title}</h3>
    <p className="article-desc">{post.excerpt}</p>
  </div>

  <div className="card-footer-custom px-4 pb-4 pt-0 d-flex align-items-center justify-content-between">
    <div className="author-info gap-3 d-flex align-items-center">
      <div className="author-avatar-placeholder">
        <img className='rounded-circle' src={post.image} alt="author" style={{width: '40px', height: '40px', objectFit: 'cover'}} />
      </div>
      <div className="author-text position-relative ms-3 text-end">
        <h6 className="author-name m-0">{post.author.name}</h6>
        <p className="author-job m-0">{post.author.role}</p>
      </div>
    </div>
    
    <div className="action-btn">
      <span className="arrow-icon">
        <i className="fa-solid fa-angle-left"></i>
      </span>
    </div>
  </div>
</NavLink>
            </div>
          ))}

        </div>
      </div>
    </div>


    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card mx-auto p-5 text-center">
       
          <div className="icon-wrapper mb-4">
            <div className="orange-box">
            <i className="fa-regular fa-envelope fa-xl text-white"></i>
            </div>
          </div>

 <h2 className="newsletter-title mb-3 ">اشترك في <span className='co'>نشرتنا الإخبارية</span></h2>
          <p className="newsletter-desc mb-4">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form className="newsletter-form d-flex gap-2 flex-md-row flex-column">
            <input 
              type="email" 
       className="form-control py-3 rounded-3 newsletter-input shadow-none" 
        placeholder="أدخل بريدك الإلكتروني" 
            />
            <button type="submit" className="btn btn-orange px-4">اشترك الآن</button>
          </form>

          <div className="newsletter-footer d-flex align-items-center justify-content-center flex-wrap gap-3 mt-4" dir="rtl">
          <div className="avatars d-flex flex-row-reverse">
          <img src="https://i.pravatar.cc/40?u=1" alt="user" className="avatar-img" />
          <img src="https://i.pravatar.cc/40?u=2" alt="user" className="avatar-img" />
          <img src="https://i.pravatar.cc/40?u=3" alt="user" className="avatar-img" />
       </div>
            <span className="footer-text">انضم لـ+10.000 مصور</span>
            <span className="footer-dot">.</span>
            <span className="footer-text">بدون إزعاج</span>
            <span className="footer-dot">.</span>
            <span className="footer-text">إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>

 
    </>
  )
}
