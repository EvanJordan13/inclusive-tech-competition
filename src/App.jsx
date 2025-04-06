import { useState } from 'react'
import { FaCode, FaLaptop, FaUsers, FaAccessibleIcon, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <li><a href="#" aria-current="page">Home</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content">
        {/* Hero section */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-content">
            <h2 id="hero-heading">Technology Skills for Everyone</h2>
            <p>Learn tech skills in an inclusive environment designed for people from underrepresented backgrounds.</p>
            <div className="cta-buttons">
              <button className="cta-primary">Explore Tutorials</button>
              <button className="cta-secondary">Join Community</button>
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
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Contact</a></li>
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
