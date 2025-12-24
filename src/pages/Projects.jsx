import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(null)

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const projects = [
    {
      id: 1,
      title: 'Unelma Platforms : Front-end',
      description:
        'The frontend is built with React, providing a modern, fast, and highly interactive user interface. It allows users to create accounts, browse products and services, make secure purchases, and engage with content through ratings and likes. Users can also view blogs, apply for jobs, and perform various tasks through an intuitive and user-friendly design that ensures a smooth and engaging experience.',
        image: '/front.png',
      tags: ['React', 'React-redux', 'CSS', 'Stripe'],
      category: 'fullstack',
      link: 'https://unelma-front-7us30xzyd-ethiopicas-projects.vercel.app/',
      github: 'https://github.com/Ethiopica/unelma-front-end.git',
    },
    {
      id: 2,
      title: 'Unelma Platforms : Back-end',
      description:
        'The backend is powered by Laravel (PHP), delivering a scalable, secure, and high-performance system. It manages all core functionalities, including user authentication, secure payment processing, content and newsletter management, and customer communications. The backend ensures reliable operations, efficient data handling, and seamless integration with the frontend.',
        image: '/back.png',
      tags: ['Laravel', 'PHP', 'Tailwind', 'MySQL', 'Unelma mail', 'Stripe', 'JavaScript' ],
      category: 'fullstack',
      link: 'https://unelma-laravel-backend-production.up.railway.app/',
      github: 'https://github.com/Ethiopica/unelma-laravel-backend.git',
    },
    {
      id: 3,
      title: 'Event planning app',
      description:
        'Helps users organize, manage, and coordinate events efficiently. It allows users to explore and create event in and around Helsinki City.',
      image: '/helsinki.JPG',
      tags: ["React", "Laravel", "PHP", "SQL", "CSS", "HTML"],
      category: 'fullstack',
      link: 'https://event-planner-livid.vercel.app/',
      github: '#',
    },
    {
      id: 4,
      title: 'Pancake order managment App',
      description:
        'Digital platform designed to streamline the process of taking, tracking, and managing pancake orders.',
      image: '/pancake.avif',
      tags: ['JavaScript', 'CSS', 'HTML',],
      category: 'frontend',
      link: 'https://pancake-f-pi.vercel.app',
      github: 'https://github.com/Ethiopica/Pancake-F',
    },
    {
      id: 5,
      title: 'HR Management App',
      description:
        'Real-time weather app with location detection, 7-day forecast, and beautiful weather animations.',
      image: '/hr.jpg',
      tags: ['React', 'Weather API', 'CSS3'],
      category: 'frontend',
      link: 'https://hr-app-bqqn-git-main-ethiopicas-projects.vercel.app',
      github: 'https://github.com/Ethiopica/hrApp',
    },
    {
      id: 6,
      title: 'Countries App',
      description:
        'A modern countries information app built to showcase global data using the REST Countries API.Users can browse, search, and filter through all nations with real-time details like population, capital, region, subregion, currencies, and languages — displayed in an elegant, responsive UI.',
      image: '/world.avif',
      tags: ["Next.js", "Redux", "supabase", "Tailwind CSS"],
      category: 'fullstack',
      link: 'https://countries-nextjs-tuvt.vercel.app',
      github: 'https://github.com/Ethiopica/countries_nextjs',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ]

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <div className="projects section">
      <div className="container">
        <h1 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h1>

        <div className="projects-intro">
          <p>
            Here are some of my recent projects that showcase my skills in full stack
            development. Each project represents a unique challenge and learning
            experience.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                {project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <span className="project-icon">{project.image}</span>
                )}
                <div className="project-overlay">
                  <span className="category-badge">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-description">
                  <p className={expandedId === project.id ? 'expanded' : ''}>
                    {project.description}
                  </p>
                  {project.description.length > 100 && (
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleDescription(project.id)}
                    >
                      {expandedId === project.id ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <span>Live Demo</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <span>GitHub</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

