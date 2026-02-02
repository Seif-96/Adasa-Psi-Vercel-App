import React from 'react'
import { PostsContext } from "../../Context/Context";
import { useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import "./Personal.css"
import Home from './../Home/Home';
import Blog from './../Blog/Blog';
import { useState } from 'react';



export default function Personal() {
  const posts = useContext(PostsContext);
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const activeCategory = post.category;

  if (!post) {
    return <div className="text-white text-center p-5">جاري التحميل...</div>;
  }
  const categories = [
    { name: "إضاءة", path: "lighting", count: 3, color: "emerald", icon: "fa-gear" },
    { name: "بورتريه", path: "portrait", count: 3, color: "purple", icon: "fa-user" },
    { name: "مناظر طبيعية", path: "landScape", count: 2, color: "blue", icon: "fa-mountain-sun" },
    { name: "تقنيات", path: "techniq", count: 5, color: "orange", icon: "fa-sliders" },
    { name: "معدات", path: "Equipment", count: 3, color: "emerald", icon: "fa-gear" }
  ];
  const categoryData = categories.find(cat => cat.name === post.category);

  return (
    <main>
     <section 
      className="hero-container" 
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="overlay"></div>
      <div className='relo rounded-pill'>
        <NavLink to="/"><i className="fa-solid fa-house"></i></NavLink>
        <i className="fa-solid fa-angle-left"></i>
        <NavLink to="/blog">المدونة</NavLink>
        <i className="fa-solid fa-angle-left"></i>
        <NavLink className="active" to={`/blog/${categoryData.path}`}>{post.category}</NavLink>
      </div>
   <div className='relo1'>
    <div className='d-flex align-items-center gap-4'>
      <div className='rounded-pill px-3 py-2 z-3' style={{backgroundColor:"rgb(238 96 15)"}}>
      <NavLink  to={`/blog/${categoryData.path}`} >{post.category}</NavLink>
      </div>
    <div className="article-meta d-flex gap-3">
            <span className="date-info order-1"><i className="far fa-calendar ms-1"></i> {post.date}</span>
            <span className="time-info order-2"><i className="far fa-clock ms-1"></i> {post.readTime} </span>
          </div>
   </div>
   <h1 className='my-3 hwi fw-bold'>{post.title}</h1>

   <div className='bg rounded-4 d-inline-flex gap-3 align-items-center my-3'>
      <div className='imav rounded-circle'><img className='w-100 rounded-circle ' src={post.author.avatar} alt="" /></div>
      <div>
      <h5 className='m-0 text-white'>{post.author.name}</h5>
      <span style={{color:"rgb(151 152 154)"}}>{post.author.role}</span>
      </div>
      
    </div>

    </div>
    
    </section>
    <div className='bg-black'>
    <div className="container py-4">
      <div className="row py-5" style={{borderBottom:"1px solid rgb(38 38 38)"}}>
         <div className="col-md-9 high">
          <p className="highlight mb-4">
            "{post.excerpt}"
          </p>

          <p className='py-3'>
            {post.content.split("\n\n")[0]}
          </p>

<div className="py-3">
  <div className="d-flex align-items-center gap-3">
    <div className="lis rounded-3 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-camera fa-xl text-orange"></i>
    </div>
    <h3 className="my-3">المعدات الأساسية <i className="bi bi-camera"></i></h3>
  </div>
  <p>{post.content.split("\n\n")[2]}</p>
</div>

<div className="py-3">
  <div className="d-flex align-items-center gap-3">
    <div className="lis rounded-3 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-camera fa-xl text-orange"></i>
    </div>
    <h3 className="my-3">توقيت التصوير <i className="bi bi-camera"></i></h3>
  </div>
  <p>{post.content.split("\n\n")[4]}</p>
</div>

<div className="py-3">
  <div className="d-flex align-items-center gap-3">
    <div className="lis rounded-3 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-camera fa-xl text-orange"></i>
    </div>
    <h3 className="my-3">التكوين الفني <i className="bi bi-camera"></i></h3>
  </div>
  <p>{post.content.split("\n\n")[6]}</p>
</div>

<div className="py-3">
  <div className="d-flex align-items-center gap-3">
    <div className="lis rounded-3 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-camera fa-xl text-orange"></i>
    </div>
    <h3 className="my-3">إعدادات الكاميرا <i className="bi bi-camera"></i></h3>
  </div>
  <p>{post.content.split("\n\n")[8]}</p>
</div>

<div className="py-3">
  <div className="d-flex align-items-center gap-3">
    <div className="lis rounded-3 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-camera text-orange"></i>
    </div>
    <h3 className="my-3">المعالجة اللاحقة <i className="bi bi-camera"></i></h3>
  </div>
  <p>{post.content.split("\n\n")[10]}</p>
</div>

<div className="py-3">
  <div className="d-flex align-items-center gap-3">
    <div className="lis rounded-3 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-camera fa-xl text-orange"></i>
    </div>
    <h3 className="my-3">الخلاصة <i className="bi bi-camera"></i></h3>
  </div>
  <p>{post.content.split("\n\n")[12]}</p>
</div>
<div className='p-3 mt-3 rounded-4' style={{backgroundColor: "#111"}}>
<div className='d-flex align-items-center gap-3 py-3'>
<div className='lis rounded-3 d-flex justify-content-center align-items-center'><i className='fa-solid fa-tags text-orange'></i></div>
  <h4 className='text-white'>الوسوم</h4>
</div>
<div className="d-flex flex-wrap gap-2 my-2">
  {post.tags.map((tag, index) => (
    <div key={index} className="p-2 px-3 rounded-pill  d-inline-block f3">
      <span>#{tag}</span>
    </div>
  ))}
</div>

</div>
<div className='p-3 mt-3 rounded-4 d-flex justify-content-between align-items-center' style={{backgroundColor: "#111"}}>
<div className='d-flex align-items-center gap-3 py-3'>
<div className='lis rounded-3 d-flex justify-content-center align-items-center'><i className='fa-solid fa-share-nodes text-orange'></i></div>
  <h4 className='text-white'>شارك المقال</h4>
</div>
<div className='d-flex gap-2'>
<div className='lis1 li1 rounded-3 d-flex justify-content-center align-items-center'><i className='fa-brands fa-twitter'></i></div>
<div className='lis1 li1 rounded-3 d-flex justify-content-center align-items-center'><i className='fa-brands fa-linkedin-in'></i></div>
<div className='lis1 li2 rounded-3 d-flex justify-content-center align-items-center'><i className='fa-brands fa-whatsapp'></i></div>
<div className='lis1 li3 rounded-3 d-flex justify-content-center align-items-center'><i className='fa-solid fa-link'></i></div>

</div>

</div>

<div className='p-3 mt-3 rounded-4' style={{backgroundColor: "#111"}}>
<div className='d-flex align-items-center gap-4 py-3'>
<div className='lisim rounded-3 d-flex justify-content-center align-items-center'><img className='w-100 rounded-2 object-fit-cover' src={post.author.avatar} alt="" /></div>
 <div>
   <span style={{color:"#ff8c00"}}>كاتب المقال</span>
  <h4 className='m-0 text-white'>{post.author.name}</h4>
  <p>{post.author.role}</p>
  <p className='m-0'>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
 </div>
</div>


</div>


        </div>
    
        <div className="col-md-3">
          <div className='sticky-sidebar-container'>
          <div className="sidebar py-4 rounded-4">
            <div className='d-flex align-items-center gap-3'>
            <div className='lis rounded-3 d-flex justify-content-center align-items-center'><i className='fa-solid fa-list text-orange'></i></div>
            <h5>محتويات المقال</h5>
            </div>
            <ul className='p-0 mt-3'>
              <li><span className="badge">1</span>المعدات الأساسية</li>
              <li><span className="badge">2</span>توقيت التصوير</li>
              <li><span className="badge">3</span>التكوين الفني</li>
              <li><span className="badge">4</span>إعدادات الكاميرا</li>
              <li><span className="badge">5</span>المعالجة اللاحقة</li>
              <li><span className="badge">6</span>الخلاصة</li>
            </ul>
          </div>
          <div className="d-flex justify-content-between sidebar1 grid grid-cols-2 gap-3 rounded-4">
          <div className="sidebar-card p-2 text-center rounded-4 flex-fill w-100">
          <i className="fa-regular fa-clock text-orange fa-xl mb-3"></i>
                <p className="mb-1 fw-bold">{post.readTime}</p>
                <small>وقت القراءة</small>
              </div>
          <div className="sidebar-card p-2 text-center rounded-4 flex-fill w-100">
          <i className="fa-solid fa-calendar-week fa-xl mb-3 text-orange"></i>
                <p className="mb-1 fw-bold">{post.date}</p>
                <small>تاريخ النشر</small>
              </div>

      
             
            </div>
          <div className="sidebar3 grid grid-cols-2 gap-3 text-center rounded-4">
            <div className='d-flex justify-content-center align-items-center pb-2'>
            <div className='lismass rounded-4 d-flex justify-content-center align-items-center'><i className='fa-solid fa-envelope fa-xl text-orange'></i></div>
            </div>
               <div>
               <h4>لا تفوّت جديدنا</h4>
               <p style={{color : "rgb(114, 114, 114)" ,fontSize:"13px" ,paddingBottom :"10px"}}>اشترك للحصول علي احدث المقالات</p>
               <NavLink to="/blog" className='btnor'>تصفح المزيد</NavLink>
               </div>
          

      
             
            </div>
          </div>
          
        </div>
      </div>
      <div className='d-flex justify-content-between my-5'>
            <div className='d-flex gap-3 align-items-end'>
            <div className="liscam rounded-4 d-flex justify-content-center align-items-center"><i className="fa-solid fa-images text-orange fa-xl"></i></div>
             <div>
             <h2 className='text-white m-0'>مقالات قد تعجبك</h2>
              <p className='m-0'>استكشف المزيد من المحتوى المميز</p>
             </div>
            </div>
            <div className='rounded-4 ro'>
              <NavLink className='text-white' to="/blog">
                عرض الكل <i className="fa-solid fa-angle-left"></i>
              </NavLink>
            </div>
    </div>
    <div className="row g-4">
  {posts
    .filter((post) => post.category === activeCategory)
    .slice(0, 3) 
    .map((post) => (
      <div key={post.slug} className="col-12 col-md-6 col-lg-4">
        <NavLink
          to={`/personal/${post.slug}`}
          className="custom-card h-100 border-0 text-decoration-none"
        >
          <div className="card-img-wrapper overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="card-img-custom position-relative"
            />
            <div className="position-absolute psDesc rounded-pill d-flex justify-content-center align-items-center">
              {post.category}
            </div>
          </div>

          <div className="card-body-custom text-end p-4">
            <h3 className="article-title mb-3">{post.title}</h3>
          </div>

          <div className="card-footer-custom px-4 pb-4 pt-0 d-flex align-items-center justify-content-between">
            <div className="author-info gap-3 d-flex align-items-center">
              <div className="author-avatar-placeholder">
                <img
                  className="rounded-circle"
                  src={post.image}
                  alt="author"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              </div>
              <div className="author-text position-relative text-end">
                <h6 className="author-name m-0">{post.author.name}</h6>
              </div>
            </div>

            <div className="action-btn">
              <span className="time-info">
                <i className="far fa-clock ms-1"></i> {post.readTime}
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    ))}
</div>

    </div>
    </div>

   
    
    </main>
  )
}
