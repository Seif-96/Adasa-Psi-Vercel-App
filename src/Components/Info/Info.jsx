import React from 'react'
import { PostsContext } from "../../Context/Context";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "./info.css"


export default function Info() {
  const posts = useContext(PostsContext);
  const authors = posts.map(post => post.author);

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
              <span style={{ color: 'rgb(249 115 22)' }}>من نحن</span>
            </div>
          </div>
          <h2 className="hero-title mb-4 fa-bold">
          مهمتنا هي<span> الإعلام والإلهام</span>
          </h2>

          <p className="mb-5 mx-auto text-center" style={{maxWidth:"50rem" ,color:"rgb(128 126 127)"}}>
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
          <div className="row justify-content-center mt-5 g-0">
          <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-users fa-2xl mb-4"></i>
                <h3>+2مليون</h3>
                <p>قارئ شهرياً</p>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-newspaper fa-2xl mb-4"></i>
                <h3>+500</h3>
                <p>مقالة منشورة</p>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-pen-nib fa-2xl mb-4"></i>
                <h3>+50</h3>
                <p>كاتب خبير</p>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <div className="stat-card">
                <i className="fa-solid fa-book-open fa-2xl mb-4"></i>
                <h3>+15</h3>
                <p>تصنيف</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-container">
      <div className="values-header">
        <h1>| <span className='text-white'>قيمنا</span> |</h1>
        <p className='mt-3'>المبادئ التي توجه كل ما نقوم بإنشائه</p>
      </div>

      <div className="values-grid">
        <div className="value-card">
          <div className="icon-wrapper"><i className='fa-solid fa-bullseye text-orange fa-lg'></i></div>
          <h3>الجودة أولاً</h3>
          <p>محتوى مدروس ومكتوب بخبرة</p>
        </div>
        <div className="value-card">
          <div className="icon-wrapper"><i className='fa-solid fa-bolt text-orange fa-lg'></i></div>
          <h3>تركيز عملي</h3>
          <p>أمثلة واقعية يمكنك تطبيقها اليوم</p>
        </div>
        <div className="value-card">
          <div className="icon-wrapper"><i className='fa-solid fa-handshake text-orange fa-lg'></i></div>
          <h3>المجتمع</h3>
          <p>تعلم مع آلاف المصورين</p>
        </div>
        <div className="value-card">
          <div className="icon-wrapper"><i className='fa-solid fa-arrows-rotate text-orange fa-lg'></i></div>
          <h3>دائماً محدث</h3>
          <p>أحدث الاتجاهات وأفضل الممارسات</p>
        </div>
      </div>
    </section>

    <section className="authors-section py-5">
      <div className="container text-center">
        <div className="authors-header mb-5">
        <div className="mb-4">
            <div className="hero-badge d-inline-flex align-items-center p-2 px-3 rounded-pill">
              <span style={{marginBottom:"2px" , opacity: 0.5, marginRight: '5px' }}>●</span>
              <span style={{ color: 'rgb(249 115 22)' }}>فريقنا</span>
            </div>
          </div>
          <h2 className="mt-3 text-white fw-bold">تعرف على كتابنا</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>



        <div className="row g-4 justify-content-center">
  {authors.map((author, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-4">
      <div className="author-card">
        <div className="avatar-container">
          <div className='bordim'>
          <img src={author.avatar} alt={author.name} />
          </div>
          <span className="verified-icon">✓</span>
        </div>

        <h3 className="text-white h5 mt-3">{author.name}</h3>
        <p className="specialty-text">{author.role}</p>

        <div className="social-links d-flex justify-content-center gap-2">
          <span className="social-item"><i className="fa-brands fa-x-twitter fa-lg"></i></span>
          <span className="social-item1"><i className="fa-brands fa-github fa-lg"></i></span>
          <span className="social-item2"><i className="fa-brands fa-linkedin fa-lg"></i></span>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
    
    <section className="contact-banner d-flex align-items-center justify-content-center">
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3 mt-4">لديك أسئلة؟ دعنا نتحدث!</h2>
        <p className="description mx-auto mb-5">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>
        
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4">
          <NavLink to="mailto:hello@adasah.com" className="nav-link-custom bg-black text-white">
            تواصل معنا 
            <i className="bi bi-envelope-at ms-2"></i>
          </NavLink>

          <NavLink to="/blog" className="nav-link-custom btn-outline-white">
            تصفح المقالات
          </NavLink>
        </div>
      </div>
    </section>

    
    </>
    
      
  )
}
