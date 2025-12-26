/**
 * EXAMPLE: Projects Page with Supabase Integration
 * 
 * To use this:
 * 1. Create a 'projects' table in Supabase with columns:
 *    - id (uuid, primary key)
 *    - title (text)
 *    - description (text)
 *    - image (text) - URL to project image
 *    - category (text) - 'frontend', 'backend', 'fullstack', etc.
 *    - tags (text[]) - Array of technology tags
 *    - github_url (text, nullable)
 *    - live_url (text, nullable)
 *    - featured (boolean, default: false)
 *    - created_at (timestamptz, default: now())
 * 
 * SQL to create the table:
 * 
 * CREATE TABLE projects (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   title TEXT NOT NULL,
 *   description TEXT,
 *   image TEXT,
 *   category TEXT DEFAULT 'fullstack',
 *   tags TEXT[] DEFAULT '{}',
 *   github_url TEXT,
 *   live_url TEXT,
 *   featured BOOLEAN DEFAULT false,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 * 
 * -- Enable RLS
 * ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
 * 
 * -- Allow anyone to read projects
 * CREATE POLICY "Allow public read" ON projects
 *   FOR SELECT TO anon
 *   USING (true);
 */

import React, { useState } from 'react';
import { useSupabaseQuery } from '../hooks/useSupabase';
import './Projects.css';

const ProjectsWithSupabase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFullDescription, setShowFullDescription] = useState({});

  // Fetch projects from Supabase
  const { data: projects, loading, error } = useSupabaseQuery('projects', {
    order: { column: 'created_at', ascending: false }
  });

  const toggleDescription = (id) => {
    setShowFullDescription(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Get unique categories from projects
  const categories = projects 
    ? ['all', ...new Set(projects.map(p => p.category))]
    : ['all'];

  // Filter projects by category
  const filteredProjects = projects?.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  ) || [];

  if (loading) {
    return (
      <div className="projects section">
        <div className="container">
          <div className="loading-spinner">Loading projects...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects section">
        <div className="container">
          <div className="error-message">
            Failed to load projects: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects section">
      <div className="container">
        <h1 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h1>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                  />
                ) : (
                  <div className="project-placeholder">📁</div>
                )}
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <p className={`project-description ${showFullDescription[project.id] ? 'expanded' : ''}`}>
                  {showFullDescription[project.id] 
                    ? project.description 
                    : `${project.description?.substring(0, 150) || ''}...`}
                </p>
                
                {project.description?.length > 150 && (
                  <button 
                    onClick={() => toggleDescription(project.id)} 
                    className="read-more-btn"
                  >
                    {showFullDescription[project.id] ? 'Show less' : 'Read more'}
                  </button>
                )}

                {/* Tags */}
                <div className="project-tags">
                  {project.tags?.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  {project.github_url && (
                    <a 
                      href={project.github_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live_url && (
                    <a 
                      href={project.live_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsWithSupabase;



