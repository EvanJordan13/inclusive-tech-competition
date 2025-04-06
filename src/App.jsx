import { useState } from 'react'
import { FaCode, FaLaptop, FaUsers, FaAccessibleIcon, FaGithub, FaTwitter, FaLinkedin, FaBook, FaRocket, FaHandsHelping, FaChalkboardTeacher, FaInfoCircle, FaUserFriends, FaCalendarAlt, FaComments, FaFileAlt, FaLightbulb, FaVideo } from 'react-icons/fa'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const tutorials = [
    { 
      id: 1, 
      title: "Web Development Fundamentals", 
      category: "Coding",
      description: "Learn HTML, CSS, and JavaScript basics in an inclusive environment.",
      icon: <FaCode aria-hidden="true" />
    },
    { 
      id: 2, 
      title: "Tech Career Pathways", 
      category: "Career",
      description: "Explore diverse career options in the technology industry.",
      icon: <FaLaptop aria-hidden="true" />
    },
    { 
      id: 3, 
      title: "Building Inclusive Tech Communities", 
      category: "Community",
      description: "Strategies for creating welcoming spaces in tech.",
      icon: <FaUsers aria-hidden="true" />
    },
    { 
      id: 4, 
      title: "Accessibility in Design", 
      category: "Design",
      description: "Create technology that works for everyone.",
      icon: <FaAccessibleIcon aria-hidden="true" />
    }
  ]

  const resourcesList = [
    {
      id: 1,
      title: "Accessible Web Design Guide",
      category: "Accessibility",
      description: "Comprehensive guide to making your websites accessible to everyone.",
      icon: <FaAccessibleIcon aria-hidden="true" />
    },
    {
      id: 2,
      title: "Free Coding Tools",
      category: "Tools",
      description: "Collection of free and low-cost development tools for beginners.",
      icon: <FaLaptop aria-hidden="true" />
    },
    {
      id: 3,
      title: "Tech Inclusion Reading List",
      category: "Books",
      description: "Essential books about diversity and inclusion in technology.",
      icon: <FaBook aria-hidden="true" />
    },
    {
      id: 4,
      title: "Starter Project Templates",
      category: "Projects",
      description: "Ready-to-use project templates for various programming languages.",
      icon: <FaRocket aria-hidden="true" />
    }
  ]

  const communityEvents = [
    {
      id: 1,
      title: "Virtual Tech Meetup",
      date: "April 15, 2025",
      description: "Online gathering for tech enthusiasts from all backgrounds to share ideas.",
      icon: <FaUserFriends aria-hidden="true" />
    },
    {
      id: 2,
      title: "Code Review Workshop",
      date: "April 22, 2025",
      description: "Learn how to give and receive constructive code feedback.",
      icon: <FaChalkboardTeacher aria-hidden="true" />
    },
    {
      id: 3,
      title: "Mentorship Matching Day",
      date: "May 5, 2025",
      description: "Connect with mentors in your field of interest.",
      icon: <FaHandsHelping aria-hidden="true" />
    },
    {
      id: 4,
      title: "Tech for Social Good Hackathon",
      date: "May 18-19, 2025",
      description: "Collaborative event to build solutions for community challenges.",
      icon: <FaCalendarAlt aria-hidden="true" />
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Founder & Lead Instructor",
      description: "Passionate about making tech education accessible to everyone.",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      id: 2,
      name: "Jordan Chen",
      role: "Accessibility Specialist",
      description: "Dedicated to creating inclusive digital experiences.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 3,
      name: "Taylor Johnson",
      role: "Community Manager",
      description: "Building bridges between diverse tech communities.",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: 4,
      name: "Sam Washington",
      role: "Content Creator",
      description: "Develops learning materials that reflect diverse perspectives.",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    }
  ]

  // Navigation handler
  const handleNavigation = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Header with accessible navigation */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <FaCode className="logo-icon" aria-hidden="true" />
            <h1>DiverseYourSkills</h1>
          </div>
          
          <nav aria-label="Main Navigation">
            <button 
              className="mobile-menu-button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
            >
              Menu
            </button>
            
            <ul id="main-menu" className={`nav-links ${isMenuOpen ? 'menu-open' : ''}`}>
              <li><a href="#" onClick={() => handleNavigation('home')} aria-current={currentPage === 'home' ? 'page' : undefined}>Home</a></li>
              <li><a href="#" onClick={() => handleNavigation('tutorials')} aria-current={currentPage === 'tutorials' ? 'page' : undefined}>Tutorials</a></li>
              <li><a href="#" onClick={() => handleNavigation('resources')} aria-current={currentPage === 'resources' ? 'page' : undefined}>Resources</a></li>
              <li><a href="#" onClick={() => handleNavigation('community')} aria-current={currentPage === 'community' ? 'page' : undefined}>Community</a></li>
              <li><a href="#" onClick={() => handleNavigation('about')} aria-current={currentPage === 'about' ? 'page' : undefined}>About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content">
        {currentPage === 'home' && (
          <>
            {/* Hero section */}
            <section className="hero" aria-labelledby="hero-heading">
              <div className="hero-content">
                <h2 id="hero-heading">Technology Skills for Everyone</h2>
                <p>Learn tech skills in an inclusive environment designed for people from underrepresented backgrounds.</p>
                <div className="cta-buttons">
                  <button className="cta-primary" onClick={() => handleNavigation('tutorials')}>Explore Tutorials</button>
                  <button className="cta-secondary" onClick={() => handleNavigation('community')}>Join Community</button>
                </div>
              </div>
            </section>

            {/* Featured tutorials section */}
            <section className="featured-tutorials" aria-labelledby="tutorials-heading">
              <h2 id="tutorials-heading">Popular Tutorials</h2>
              <div className="tutorials-grid">
                {tutorials.map(tutorial => (
                  <article key={tutorial.id} className="tutorial-card">
                    <div className="tutorial-icon">{tutorial.icon}</div>
                    <div className="tutorial-content">
                      <span className="tutorial-category">{tutorial.category}</span>
                      <h3>{tutorial.title}</h3>
                      <p>{tutorial.description}</p>
                      <a href="#" className="tutorial-link" aria-label={`Start tutorial: ${tutorial.title}`}>
                        Start Learning
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            
            {/* Mission section */}
            <section className="mission-section" aria-labelledby="mission-heading">
              <h2 id="mission-heading">Our Mission</h2>
              <div className="mission-content">
                <p>
                  DiverseYourSkills is dedicated to making technology education accessible 
                  to everyone, with a focus on supporting individuals from underrepresented groups.
                  We believe that diverse perspectives lead to better technology and a more 
                  inclusive digital future.
                </p>
                <div className="stats">
                  <div className="stat">
                    <span className="stat-number">5000+</span>
                    <span className="stat-label">Community Members</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">120+</span>
                    <span className="stat-label">Free Tutorials</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">40+</span>
                    <span className="stat-label">Partner Companies</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Newsletter section */}
            <section className="newsletter-section" aria-labelledby="newsletter-heading">
              <div className="newsletter-container">
                <h2 id="newsletter-heading">Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest tutorials and community events.</p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="youremail@example.com" 
                      aria-describedby="email-help"
                      required
                    />
                    <span id="email-help" className="form-help">We'll never share your email with anyone else.</span>
                  </div>
                  <button type="submit" className="cta-primary">Subscribe</button>
                </form>
              </div>
            </section>
          </>
        )}

        {currentPage === 'tutorials' && (
          <div className="page-container">
            <section className="page-header" aria-labelledby="tutorials-page-heading">
              <h2 id="tutorials-page-heading">Learn at Your Own Pace</h2>
              <p>Browse our collection of inclusive and accessible tutorials for all skill levels.</p>
            </section>

            <section className="filter-section">
              <div className="filter-container">
                <h3>Find Tutorials</h3>
                <div className="filter-options">
                  <div className="filter-group">
                    <label htmlFor="category-filter">Category</label>
                    <select id="category-filter">
                      <option value="all">All Categories</option>
                      <option value="coding">Coding</option>
                      <option value="design">Design</option>
                      <option value="career">Career</option>
                      <option value="community">Community</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label htmlFor="level-filter">Skill Level</label>
                    <select id="level-filter">
                      <option value="all">All Levels</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label htmlFor="tutorial-search">Search</label>
                    <input type="text" id="tutorial-search" placeholder="Search tutorials..." />
                  </div>
                </div>
              </div>
            </section>

            <section className="tutorials-list">
              <h3 className="section-heading">Featured Tutorials</h3>
              <div className="tutorials-grid">
                {tutorials.map(tutorial => (
                  <article key={tutorial.id} className="tutorial-card">
                    <div className="tutorial-icon">{tutorial.icon}</div>
                    <div className="tutorial-content">
                      <span className="tutorial-category">{tutorial.category}</span>
                      <h3>{tutorial.title}</h3>
                      <p>{tutorial.description}</p>
                      <div className="tutorial-meta">
                        <span className="tutorial-level">Beginner</span>
                        <span className="tutorial-duration">2 hours</span>
                      </div>
                      <a href="#" className="tutorial-link" aria-label={`Start tutorial: ${tutorial.title}`}>
                        Start Learning
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="tutorials-list">
              <h3 className="section-heading">New Tutorials</h3>
              <div className="tutorials-grid">
                <article className="tutorial-card">
                  <div className="tutorial-icon"><FaLightbulb aria-hidden="true" /></div>
                  <div className="tutorial-content">
                    <span className="tutorial-category">Problem-Solving</span>
                    <h3>Algorithmic Thinking</h3>
                    <p>Learn how to break down complex problems into manageable steps.</p>
                    <div className="tutorial-meta">
                      <span className="tutorial-level">Intermediate</span>
                      <span className="tutorial-duration">3 hours</span>
                    </div>
                    <a href="#" className="tutorial-link">Start Learning</a>
                  </div>
                </article>
                <article className="tutorial-card">
                  <div className="tutorial-icon"><FaVideo aria-hidden="true" /></div>
                  <div className="tutorial-content">
                    <span className="tutorial-category">Visual Media</span>
                    <h3>Digital Storytelling</h3>
                    <p>Use technology to create compelling narratives that connect with audiences.</p>
                    <div className="tutorial-meta">
                      <span className="tutorial-level">Beginner</span>
                      <span className="tutorial-duration">4 hours</span>
                    </div>
                    <a href="#" className="tutorial-link">Start Learning</a>
                  </div>
                </article>
                <article className="tutorial-card">
                  <div className="tutorial-icon"><FaFileAlt aria-hidden="true" /></div>
                  <div className="tutorial-content">
                    <span className="tutorial-category">Documentation</span>
                    <h3>Technical Writing</h3>
                    <p>Develop skills to create clear and inclusive documentation for your projects.</p>
                    <div className="tutorial-meta">
                      <span className="tutorial-level">Intermediate</span>
                      <span className="tutorial-duration">2.5 hours</span>
                    </div>
                    <a href="#" className="tutorial-link">Start Learning</a>
                  </div>
                </article>
                <article className="tutorial-card">
                  <div className="tutorial-icon"><FaRocket aria-hidden="true" /></div>
                  <div className="tutorial-content">
                    <span className="tutorial-category">Career</span>
                    <h3>Open Source Contribution</h3>
                    <p>Navigate the world of open source and make your first contributions.</p>
                    <div className="tutorial-meta">
                      <span className="tutorial-level">Beginner</span>
                      <span className="tutorial-duration">3 hours</span>
                    </div>
                    <a href="#" className="tutorial-link">Start Learning</a>
                  </div>
                </article>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'resources' && (
          <div className="page-container">
            <section className="page-header" aria-labelledby="resources-page-heading">
              <h2 id="resources-page-heading">Helpful Resources</h2>
              <p>Tools, guides, and materials to support your learning journey.</p>
            </section>

            <section className="resources-categories">
              <div className="categories-grid">
                <div className="category-card">
                  <div className="category-icon"><FaBook aria-hidden="true" /></div>
                  <h3>Learning Guides</h3>
                  <p>Structured resources for self-paced learning</p>
                </div>
                <div className="category-card">
                  <div className="category-icon"><FaLaptop aria-hidden="true" /></div>
                  <h3>Development Tools</h3>
                  <p>Software and platforms to boost productivity</p>
                </div>
                <div className="category-card">
                  <div className="category-icon"><FaAccessibleIcon aria-hidden="true" /></div>
                  <h3>Accessibility</h3>
                  <p>Resources for creating inclusive technology</p>
                </div>
                <div className="category-card">
                  <div className="category-icon"><FaFileAlt aria-hidden="true" /></div>
                  <h3>Templates</h3>
                  <p>Ready-to-use project frameworks</p>
                </div>
              </div>
            </section>

            <section className="featured-resources">
              <h3 className="section-heading">Featured Resources</h3>
              <div className="resources-grid">
                {resourcesList.map(resource => (
                  <article key={resource.id} className="resource-card">
                    <div className="resource-icon">{resource.icon}</div>
                    <div className="resource-content">
                      <span className="resource-category">{resource.category}</span>
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                      <a href="#" className="resource-link" aria-label={`Access resource: ${resource.title}`}>
                        Access Resource
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="community-resources">
              <h3 className="section-heading">Community-Contributed Resources</h3>
              <div className="resources-grid">
                <article className="resource-card">
                  <div className="resource-icon"><FaLightbulb aria-hidden="true" /></div>
                  <div className="resource-content">
                    <span className="resource-category">Learning Path</span>
                    <h3>Self-Taught Developer Roadmap</h3>
                    <p>A comprehensive guide for those learning to code without formal education.</p>
                    <a href="#" className="resource-link">View Roadmap</a>
                  </div>
                </article>
                <article className="resource-card">
                  <div className="resource-icon"><FaComments aria-hidden="true" /></div>
                  <div className="resource-content">
                    <span className="resource-category">Communication</span>
                    <h3>Inclusive Language Guide</h3>
                    <p>Guidance on using welcoming and respectful language in tech contexts.</p>
                    <a href="#" className="resource-link">Read Guide</a>
                  </div>
                </article>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'community' && (
          <div className="page-container">
            <section className="page-header" aria-labelledby="community-page-heading">
              <h2 id="community-page-heading">Join Our Community</h2>
              <p>Connect with fellow learners, mentors, and experts in a supportive environment.</p>
              <button className="cta-primary">Become a Member</button>
            </section>

            <section className="community-events">
              <h3 className="section-heading">Upcoming Events</h3>
              <div className="events-grid">
                {communityEvents.map(event => (
                  <article key={event.id} className="event-card">
                    <div className="event-icon">{event.icon}</div>
                    <div className="event-content">
                      <span className="event-date">{event.date}</span>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <a href="#" className="event-link" aria-label={`Register for event: ${event.title}`}>
                        Register
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="community-groups">
              <h3 className="section-heading">Community Groups</h3>
              <div className="groups-grid">
                <article className="group-card">
                  <h3>Coding Beginners Circle</h3>
                  <p>A friendly space for those new to programming to ask questions and learn together.</p>
                  <div className="group-stats">
                    <span>523 members</span>
                    <span>Weekly meetings</span>
                  </div>
                  <a href="#" className="group-link">Join Group</a>
                </article>
                <article className="group-card">
                  <h3>Tech Career Navigators</h3>
                  <p>Support network for job seekers and career changers entering the tech industry.</p>
                  <div className="group-stats">
                    <span>348 members</span>
                    <span>Bi-weekly meetings</span>
                  </div>
                  <a href="#" className="group-link">Join Group</a>
                </article>
                <article className="group-card">
                  <h3>Accessibility Advocates</h3>
                  <p>Dedicated to promoting and implementing accessible technology practices.</p>
                  <div className="group-stats">
                    <span>275 members</span>
                    <span>Monthly meetings</span>
                  </div>
                  <a href="#" className="group-link">Join Group</a>
                </article>
                <article className="group-card">
                  <h3>Project Collaboration Hub</h3>
                  <p>Find partners for side projects and build your portfolio with community support.</p>
                  <div className="group-stats">
                    <span>410 members</span>
                    <span>Ongoing projects</span>
                  </div>
                  <a href="#" className="group-link">Join Group</a>
                </article>
              </div>
            </section>

            <section className="community-testimonials">
              <h3 className="section-heading">Community Voices</h3>
              <div className="testimonials-grid">
                <div className="testimonial">
                  <p>"Finding DiverseYourSkills was a turning point in my tech journey. The supportive community helped me gain confidence in my abilities."</p>
                  <div className="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />
                    <div>
                      <strong>Aisha Patel</strong>
                      <span>Front-end Developer</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <p>"The mentorship I received here helped me navigate barriers I faced as a non-traditional tech entrant. I'm now paying it forward as a mentor myself."</p>
                  <div className="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                    <div>
                      <strong>Marcus Johnson</strong>
                      <span>DevOps Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="page-container">
            <section className="page-header" aria-labelledby="about-page-heading">
              <h2 id="about-page-heading">About DiverseYourSkills</h2>
              <p>Our story, mission, and the team behind making technology more inclusive.</p>
            </section>

            <section className="about-mission">
              <div className="mission-container">
                <div className="mission-text">
                  <h3>Our Story</h3>
                  <p>
                    DiverseYourSkills was founded in 2025 with a simple yet powerful vision: to create a tech education platform that truly represents and serves everyone. We recognized that traditional tech education often overlooks the unique challenges faced by underrepresented groups in technology.
                  </p>
                  <p>
                    What began as a small collection of tutorials and a forum has grown into a vibrant community of learners, educators, and industry professionals committed to making technology skills accessible to all.
                  </p>
                </div>
                <div className="mission-values">
                  <h3>Our Values</h3>
                  <ul>
                    <li>
                      <strong>Inclusivity</strong>
                      <p>Creating learning experiences that welcome everyone regardless of background.</p>
                    </li>
                    <li>
                      <strong>Accessibility</strong>
                      <p>Ensuring our content and platform can be used by people of all abilities.</p>
                    </li>
                    <li>
                      <strong>Community</strong>
                      <p>Fostering supportive relationships that empower personal growth.</p>
                    </li>
                    <li>
                      <strong>Quality</strong>
                      <p>Delivering educational materials that are both rigorous and approachable.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="partners-section">
              <h3 className="section-heading">Our Partners</h3>
              <p className="partners-intro">We collaborate with organizations committed to diversity and inclusion in technology.</p>
              <div className="partners-grid">
                <div className="partner-logo">Company A</div>
                <div className="partner-logo">Company B</div>
                <div className="partner-logo">Organization C</div>
                <div className="partner-logo">Foundation D</div>
                <div className="partner-logo">Institute E</div>
                <div className="partner-logo">Network F</div>
              </div>
            </section>

            <section className="contact-section">
              <h3 className="section-heading">Contact Us</h3>
              <div className="contact-container">
                <div className="contact-info">
                  <p><strong>Email:</strong> hello@diverseyourskills.org</p>
                  <p><strong>Social:</strong> @DiverseYourSkills on all platforms</p>
                  <div className="social-links">
                    <a href="#" aria-label="GitHub"><FaGithub aria-hidden="true" /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter aria-hidden="true" /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin aria-hidden="true" /></a>
                  </div>
                </div>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input type="text" id="contact-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="cta-primary">Send Message</button>
                </form>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>DiverseYourSkills</h2>
            <p>Making technology accessible for everyone.</p>
            <div className="social-links" aria-label="Social Media Links">
              <a href="#" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter aria-hidden="true" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#" onClick={() => handleNavigation('tutorials')}>Tutorials</a></li>
              <li><a href="#" onClick={() => handleNavigation('resources')}>Resources</a></li>
              <li><a href="#" onClick={() => handleNavigation('community')}>Community</a></li>
              <li><a href="#" onClick={() => handleNavigation('about')}>About</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#" onClick={() => handleNavigation('about')}>About Us</a></li>
              <li><a href="#" onClick={() => handleNavigation('about')}>Our Team</a></li>
              <li><a href="#" onClick={() => handleNavigation('about')}>Partnerships</a></li>
              <li><a href="#" onClick={() => handleNavigation('about')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} DiverseYourSkills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
