import React from 'react'
import './Home.css'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
import SectionDivider from '../components/SectionDivider'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Elias Bekele Tekle</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Web Developer</h2>
              <p className="hero-description">
                Building modern, scalable web applications with cutting-edge technologies. 
                Specializing in React, Next.js, Node.js, and cloud solutions.
              </p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                  View My Work
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-container">
                {/* Animated background rings */}
                <div className="orbit-ring ring-1"></div>
                <div className="orbit-ring ring-2"></div>
                <div className="orbit-ring ring-3"></div>
                
                {/* Floating particles */}
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
                <div className="particle particle-5"></div>
                <div className="particle particle-6"></div>
                
                {/* Hexagon frame */}
                <div className="hexagon-frame">
                  <img src="/profile.JPG" alt="Elias Bekele Tekle" className="hero-profile-img" />
                </div>
                
                {/* Glowing backdrop */}
                <div className="profile-backdrop"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="tech-marquee-section">
        <div className="container">
          <h2 className="marquee-heading">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </div>
        
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* Frontend */}
            <div className="marquee-item">
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-nextjs-plain"></i>
              <span>Next.js</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-typescript-plain colored"></i>
              <span>TypeScript</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-html5-plain colored"></i>
              <span>HTML5</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-css3-plain colored"></i>
              <span>CSS3</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-tailwindcss-original colored"></i>
              <span>Tailwind</span>
            </div>
            
            {/* Backend */}
            <div className="marquee-item">
              <i className="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-php-plain colored"></i>
              <span>PHP</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-laravel-original colored"></i>
              <span>Laravel</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-express-original"></i>
              <span>Express</span>
            </div>
            
            {/* Database */}
            <div className="marquee-item">
              <i className="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-mysql-plain colored"></i>
              <span>MySQL</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
            </div>
            
            {/* CMS */}
            <div className="marquee-item">
              <i className="devicon-wordpress-plain"></i>
              <span>WordPress</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-drupal-plain colored"></i>
              <span>Drupal</span>
            </div>
            
            {/* DevOps */}
            <div className="marquee-item">
              <i className="devicon-git-plain colored"></i>
              <span>Git</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-docker-plain colored"></i>
              <span>Docker</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-vercel-original"></i>
              <span>Vercel</span>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="marquee-item">
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-nextjs-plain"></i>
              <span>Next.js</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-typescript-plain colored"></i>
              <span>TypeScript</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-html5-plain colored"></i>
              <span>HTML5</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-css3-plain colored"></i>
              <span>CSS3</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-tailwindcss-original colored"></i>
              <span>Tailwind</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-php-plain colored"></i>
              <span>PHP</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-laravel-original colored"></i>
              <span>Laravel</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-express-original"></i>
              <span>Express</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-mysql-plain colored"></i>
              <span>MySQL</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-wordpress-plain"></i>
              <span>WordPress</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-drupal-plain colored"></i>
              <span>Drupal</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-git-plain colored"></i>
              <span>Git</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-docker-plain colored"></i>
              <span>Docker</span>
            </div>
            <div className="marquee-item">
              <i className="devicon-vercel-original"></i>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      <SectionDivider />

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      <SectionDivider />

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      <SectionDivider />

      {/* Blog Section */}
      <section id="blog">
        <Blog />
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home
