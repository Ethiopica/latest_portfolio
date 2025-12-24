import React, { useState, useEffect } from 'react'
import './Skills.css'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
        
      ],
    },
    {
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
        { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
      ],
    },
    {
      title: 'CMS',
      skills: [
        { name: 'Drupal', icon: 'devicon-drupal-plain colored' },
        { name: 'WoordPress', icon: 'devicon-wordpress-plain colored' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
        { name: 'Jenkins', icon: 'devicon-jenkins-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        
      ],
    },
  ]

  const tools = [
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Jira', icon: 'devicon-jira-plain colored' },
    { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
    { name: 'Jest', icon: 'devicon-jest-plain colored' },
    { name: 'Pytest', icon: 'devicon-pytest-plain colored' },
    { name: 'Slack', icon: 'devicon-slack-plain colored' },
    { name: 'Railway', icon: 'devicon-railway-plain colored' },
    { name: 'Render', icon: 'devicon-render-plain colored' },
    
  ]

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveCategory((prev) => (prev > 0 ? prev - 1 : skillCategories.length - 1))
      } else if (e.key === 'ArrowRight') {
        setActiveCategory((prev) => (prev < skillCategories.length - 1 ? prev + 1 : 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [skillCategories.length])

  return (
    <div className="skills section">
      <div className="container">
        <h1 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h1>

        <div className="skills-intro">
          <p>
            As a full stack developer, I've built a comprehensive skill set that allows
            me to handle projects from conception to deployment. Here's an overview of
            my technical expertise.
          </p>
        </div>

        <div className="skills-slider">
          <div className="category-tabs">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`category-tab ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                <span className="tab-title">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="skills-slider-content">
            <div 
              className="skills-slider-track"
              style={{ transform: `translateX(-${activeCategory * 100}%)` }}
            >
              {skillCategories.map((category, index) => (
                <div key={index} className="skills-slide">
                  <h3 className="slide-title">{category.title}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <i className={`skill-icon ${skill.icon}`}></i>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-navigation">
            <button
              className="slider-btn prev"
              onClick={() => setActiveCategory((prev) => (prev > 0 ? prev - 1 : skillCategories.length - 1))}
              aria-label="Previous category"
            >
              ←
            </button>
            <div className="slider-indicators">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${activeCategory === index ? 'active' : ''}`}
                  onClick={() => setActiveCategory(index)}
                  aria-label={`Go to category ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="slider-btn next"
              onClick={() => setActiveCategory((prev) => (prev < skillCategories.length - 1 ? prev + 1 : 0))}
              aria-label="Next category"
            >
              →
            </button>
          </div>
        </div>

        <div className="tools-section">
          <h2>Tools & Technologies</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-badge">
                <i className={`tool-icon ${tool.icon}`}></i>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

