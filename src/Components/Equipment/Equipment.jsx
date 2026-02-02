import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Equipment() {
  const [activeView, setActiveView] = useState("grid");
  const { searchTerm, activeCategory, posts } = useOutletContext();
  const landscapePosts = posts.filter(
    post => post.category === "معدات"
  );

  const count = landscapePosts.length;

  const filteredPosts = landscapePosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="itHead d-flex justify-content-between align-items-center pb-2">
        <div>
          <span style={{ color: "rgb(117 117 117)" }}>
            عرض <span className="text-white">{count}</span> مقالات في
            <span style={{ color: "#ff8c00" }}>
              {" "}
              {landscapePosts[0]?.category}
            </span>
          </span>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-2">
          <div className="pg d-flex gap-1">
            <button
              className={`bt ${activeView === "grid" ? "active" : ""}`}
              onClick={() => setActiveView("grid")}
            >
              <i className="fa-solid fa-grip fa-sm"></i>
            </button>

            <button
              className={`bt ${activeView === "list" ? "active" : ""}`}
              onClick={() => setActiveView("list")}
            >
              <i className="fa-solid fa-bars fa-sm"></i>
            </button>
          </div>

          <button
            className="clo border-0 d-flex justify-content-center align-items-center gap-1"
            style={{ color: "#757575" }}
          >
            <i className="fa-solid fa-xmark fa-sm"></i>
            <NavLink
              to="/blog"
              style={{ color: "rgb(117 117 117)" }}
            >
              مسح الفلاتر
            </NavLink>
          </button>
        </div>
      </div>

      {filteredPosts.slice(0, 6).map(post => (
  <div
    key={post.id}
    className={activeView === "grid" ? "col-12 col-md-6 col-lg-4" : "col-12 mb-4"}
  >
    <a
      href={`/personal/${post.slug}`}
      className={`custom-card h-100 border-0 text-decoration-none ${activeView === "list" ? "list-view" : ""}`}
      data-view={activeView}
    >
      <div className="card-img-wrapper overflow-hidden">
        <img src={post.image} alt={post.title} className="card-img-custom" />
        <div className="position-absolute psDesc rounded-pill d-flex justify-content-center align-items-center">
          {post.category}
        </div>
      </div>

      <div className="card-content-wrapper d-flex flex-column flex-grow-1">
        <div className="card-body-custom text-end p-4">
          <div className="article-meta d-flex gap-3 mb-2">
            <span className="date-info order-1">{post.date} <i className="far fa-calendar ms-1"></i></span>
            <span className="time-info order-2">{post.readTime} <i className="far fa-clock ms-1"></i></span>
          </div>

          <h3 className="article-title mb-3">{post.title}</h3>
          <p className="article-excerpt">{post.excerpt}</p>
        </div>

        <div className="card-footer-custom px-4 pb-4 pt-0 d-flex align-items-center justify-content-between">
    <div className="author-info gap-3 d-flex align-items-center">
      <div className="author-avatar-placeholder">
        <img className='rounded-circle' src={post.author.avatar} alt="author" style={{width: '40px', height: '40px', objectFit: 'cover'}} />
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
      </div>
    </a>
  </div>
))}
    </>
  );
}
