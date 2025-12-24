import React, { useState } from 'react'
import './Blog.css'

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({})
  const [activeCertificate, setActiveCertificate] = useState(null)

  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  const openCertificate = (certificate) => {
    setActiveCertificate(certificate)
    document.body.style.overflow = 'hidden'
  }

  const closeCertificate = () => {
    setActiveCertificate(null)
    document.body.style.overflow = 'auto'
  }

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with DevOps on AWS',
      excerpt:
        'Completed Getting Started with DevOps on AWS certification, focusing on DevOps culture, continuous integration and delivery (CI/CD), infrastructure as code, monitoring, and automation with AWS services.',
      badge: '🎓 Certification Completed',
      completionDate: 'September 23, 2025',
      date: 'December 24, 2025',
      readTime: '5 min read',
      category: 'AWS',
      image: '/aws.png',
      certificate: '/aws3.pdf',
    },
    {
      id: 2,
      title: 'Amazon EC2 Basics',
      excerpt:
        'This training provided a foundational understanding of Amazon Elastic Compute Cloud (EC2), covering how to launch, configure, and manage virtual servers on AWS. It introduced core concepts such as instance types, security groups, key pairs, storage options, and basic cost considerations.',
      badge: '🎓 Certification Completed',
      completionDate: 'September 23, 2025',
      date: 'December 24, 2025',
      readTime: '8 min read',
      category: 'AWS',
      image: '/aws.png',
      certificate: '/aws2.pdf',
    },
    {
      id: 3,
      title: 'AWS Identity and Access Management (IAM).',
      excerpt:
        'This training covered the core architecture and terminology of AWS Identity and Access Management (IAM), focusing on how access is securely managed in AWS. It introduced key concepts such as users, groups, roles, policies, and permission boundaries, along with best practices for authentication, authorization, and least-privilege access in cloud environments.',
      badge: '🎓 Certification Completed',
      completionDate: 'September 23, 2025',
      date: 'December 24, 2025',
      category: 'AWS',
      image: '/aws.png',
      certificate: '/AWS 1.pdf',
    },
  ]

  return (
    <div className="blog section">
      <div className="container">
        <h1 className="section-title">
          My <span className="gradient-text">Blog</span>
        </h1>

        <div className="blog-intro">
          <p>
            I enjoy sharing my knowledge and experiences in web development. Here are
            some of my latest articles covering various topics in frontend, backend,
            and full stack development.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => {
            const isExpanded = expandedPosts[post.id]
            return (
              <article key={post.id} className={`blog-card ${isExpanded ? 'expanded' : ''}`}>
                <div className="blog-image">
                  {post.image.startsWith('/') ? (
                    <img src={post.image} alt={post.title} className="blog-img" />
                  ) : (
                    <span className="blog-icon">{post.image}</span>
                  )}
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                </div>
                  <h3>{post.title}</h3>
                  <p className={`blog-excerpt ${isExpanded ? 'expanded' : ''}`}>{post.excerpt}</p>
                  {post.badge && (
                    <div className={`blog-certification ${isExpanded ? 'show' : ''}`}>
                      <span className="certification-badge">{post.badge}</span>
                      {post.completionDate && (
                        <span className="certification-date">📅 {post.completionDate}</span>
                      )}
                    </div>
                  )}
                  <div className="blog-actions">
                    <button 
                      className="read-more" 
                      onClick={() => toggleExpand(post.id)}
                    >
                      {isExpanded ? '← Show Less' : 'Read More →'}
                    </button>
                    {post.certificate && (
                      <button 
                        className="view-certificate-btn"
                        onClick={() => openCertificate(post.certificate)}
                      >
                        🎓 View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>

      {/* Certificate Modal Overlay */}
      {activeCertificate && (
        <div className="certificate-overlay" onClick={closeCertificate}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-close" onClick={closeCertificate}>
              ✕
            </button>
            <iframe
              src={activeCertificate}
              title="Certificate"
              className="certificate-iframe"
            />
            <a 
              href={activeCertificate} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-download"
            >
              📥 Open in New Tab
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog

