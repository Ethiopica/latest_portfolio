import React from 'react'
import './About.css'
import SectionDivider from '../components/SectionDivider'

const About = () => {
  return (
    <div className="about section">
      <div className="container">
        <h1 className="section-title">
          About <span className="gradient-text">Me</span>
        </h1>

        <div className="about-content text-only">
          <div className="about-text">
            <h2>Full Stack Web Developer</h2>
            <p>
              Full Stack Web Developer graduated from Business College Helsinki on May 30, 2026, with hands-on experience from a Junior Software Developer internship at Unelma Platforms Ltd. Delivered React utility payment features, redesigned Unelma Mail with a custom WordPress theme, and built the Unelma Mail WordPress plugin and Gmail Campaign Extension. Also experienced with PHP, Laravel, MySQL, Drupal, and AWS. Motivated to apply technical skills on real-world projects and grow as a Full Stack Developer.
            </p>
          </div>
        </div>

        <SectionDivider />

        <div className="experience-section">
          <h2>Experience & Education</h2>
          <div className="timeline">
            {/* Education - Current */}
            <div className="timeline-item current">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-badge">Compeleted</span>
                <h3>Education - Full Stack Web Development</h3>
                <p className="timeline-company">Business College Helsinki</p>
                <p className="timeline-location">📍 Pasila, Helsinki</p>
                <p className="timeline-date">Jan 2025 - May 2026</p>
                <div className="timeline-tech">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'MySQL', 'Laravel', 'PHP', 'Drupal', 'WordPress'].map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Junior Software Developer Internship - Unelma Platforms */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Junior Software Developer</h3>
                <p className="timeline-company">Unelma Platforms Ltd</p>
                <p className="timeline-location">📍 Internship</p>
                <p className="timeline-date">Feb 4 – May 4, 2026</p>
                <ul className="timeline-responsibilities">
                  <li>Delivered a variety of product tickets, including utility payment systems built with React</li>
                  <li>Redesigned the entire Unelma Mail page by creating a new WordPress theme</li>
                  <li>Built the Unelma Mail WordPress plugin and the Unelma Mail Campaign Extension for Gmail</li>
                </ul>
                <div className="timeline-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">WordPress</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">Gmail Extension</span>
                  <span className="tech-tag">Laravel</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>
            </div>

            {/* CNC Machinist - Neontekniika */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>CNC Machinist</h3>
                <p className="timeline-company">Neontekniika Oy</p>
                <p className="timeline-location">📍 Tampere, Finland</p>
                <p className="timeline-date">Dec 2023 - Aug 2024</p>
                <p className="timeline-description">
                  A production worker that operates multiple machineries
                </p>
                <ul className="timeline-responsibilities">
                  <li>Operate laser cutting machine and bending machineries</li>
                </ul>
                <div className="timeline-tech">
                  <span className="tech-tag">Fanuc</span>
                  <span className="tech-tag">Heidenhain</span>
                </div>
              </div>
            </div>

            {/* CNC Machinist - OP Teräs */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>CNC Machinist</h3>
                <p className="timeline-company">OP Teräs & Pirkanmaan Levytyö Oy</p>
                <p className="timeline-location">📍 Tampere, Finland</p>
                <p className="timeline-date">Dec 2022 - May 2023</p>
                <p className="timeline-description">
                  Worked on a CNC machining center
                </p>
                <ul className="timeline-responsibilities">
                  <li>Writing and Editing a CNC program</li>
                  <li>Produce parts from metal or plastic according to the specification provided</li>
                  <li>Check quality of products</li>
                  <li>Daily tools and machinery maintenance</li>
                </ul>
                <div className="timeline-tech">
                  <span className="tech-tag">Fanuc</span>
                  <span className="tech-tag">Heidenhain</span>
                </div>
              </div>
            </div>

            {/* Lecturer - Jimma University */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Lecturer</h3>
                <p className="timeline-company">Jimma University</p>
                <p className="timeline-location">📍 Jimma, Ethiopia</p>
                <p className="timeline-date">Sep 2009 - May 2016</p>
                <p className="timeline-description">
                  Worked as a teacher and researcher
                </p>
                <ul className="timeline-responsibilities">
                  <li>Teaching multiple business related courses</li>
                  <li>Conducting research</li>
                  <li>Consultancy and community based education</li>
                </ul>
                <div className="timeline-tech">
                  <span className="tech-tag">SPSS</span>
                  <span className="tech-tag">STATA</span>
                  <span className="tech-tag">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

