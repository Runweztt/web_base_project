import React, { useState } from 'react';
import './Home.css';
import { FaTimes, FaClock, FaWifi, FaUsers, FaHandshake } from 'react-icons/fa';


import workspace1 from '../../assets/workspace1.jpg';
import workspace2 from '../../assets/workspace2.jpg';
import workspace3 from '../../assets/workspace3.jpg';
import workspace4 from '../../assets/workspace4.jpg';

const allWorkspaces = [
  {
    name: 'Marketing Hub',
    image: workspace1,
    description: 'Collaborate on creative strategies and campaigns in a vibrant environment.',
    availability: 'Available'
  },
  {
    name: 'Development Den',
    image: workspace2,
    description: 'Code, debug, and build applications with like-minded developers.',
    availability: 'Not Available'
  },
  {
    name: 'Design Studio',
    image: workspace3,
    description: 'Design innovative products and solutions in a creative workspace.',
    availability: 'Available'
  },
  {
    name: 'Data Lab',
    image: workspace4,
    description: 'Dive into analytics and machine learning projects with powerful resources.',
    availability: 'Not Available'
  }
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const submitChange = () => {
    const results = allWorkspaces.filter((space) =>
      space.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResults(results);
    setHasSearched(true);
    setSearchTerm('')
  };

  const deleteItem = (index) => {
    setSearchResults(prev => prev.filter((_, i) => i !== index));
  };




  return (
    <>

    {/* home section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover The True WorkSpace</h1>
          <p>
            Join a vibrant community of innovators, creators, and teams. Work, collaborate,
            and grow in a workspace built for productivity and progress.
          </p>
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn btn-outline">Book a Tour</button>
          </div>
        </div>
      </div> 

      {/* workspace display section  */}

      <div className="workspace-section">
        <h2>Our Workspaces</h2>
        <div className="workspace-grid">
          {allWorkspaces.map((space, index) => (
            <div key={index} className="workspace-card">
              <img src={space.image} alt={space.name} />
              <div className="card-body">
                <h3>{space.name}</h3>
                <p>{space.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       

       {/* wprkspace search section  */}
      <div className="search-section">
        <h2>Search for Workspace</h2>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search workspaces..."
            onKeyDown={(e) => e.key === 'Enter' && submitChange()}
          />
          <button onClick={submitChange}>Search</button>
        </div>
             
             {/* workspace search display section  */}
        {hasSearched && (
          <div className="search-results">
            {searchResults.length > 0 ? (
              searchResults.map((space, index) => (
                <div key={index} className="search-card">
                  <h3>{space.name}</h3>
                  <p>{space.description}</p>
                  <span className={`availability ${space.availability === 'Available' ? 'green' : 'red'}`}>
                    {space.availability}
                  </span>
                  <br />
                  <button onClick={() => deleteItem(index)} className='remove-button'><FaTimes /> </button>
                  <button className='remove-button'>Book now</button>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
        )}
      </div>


         {/* workspace benefit of working with us section  */}

      <div className="benefits-section">
        <h2>Why Choose Our Workspaces?</h2>
        <p className="benefits-intro">
          Whether you're a solo entrepreneur, a growing startup, or a remote team, our workspaces are designed to help you thrive. Here's what sets us apart:
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaClock className="benefit-icon" />
            <h3>24/7 Access</h3>
            <p>
              Work when inspiration strikes. Our facilities are open around the clock, so you can maximise productivity on your terms — day or night.
            </p>
          </div>
          <div className="benefit-card">
            <FaWifi className="benefit-icon" />
            <h3>Blazing Fast Wi-Fi</h3>
            <p>
              Stay connected with our secure, high-speed internet designed for seamless meetings, uploads, and remote work without a single hiccup.
            </p>
          </div>
          <div className="benefit-card">
            <FaUsers className="benefit-icon" />
            <h3>Vibrant Community Events</h3>
            <p>
              From workshops to networking mixers, we host regular events that foster collaboration, learning, and meaningful professional connections.
            </p>
          </div>
          <div className="benefit-card">
            <FaHandshake className="benefit-icon" />
            <h3>Flexible Membership Plans</h3>
            <p>
              Choose from hourly, daily, weekly, or monthly passes to match your unique workflow. No long-term contracts. Just flexibility.
            </p>
          </div>
        </div>
      </div>


   {/* workspace newletter section  */}

       <div className="newsletter-section">
  <h2>Stay in the Loop</h2>
  <p>
    Get the latest workspace updates, exclusive deals, and productivity tips straight to your inbox.
    No spam just useful content, once a week.
  </p>
  <form className="newsletter-form">
    <input type="email" placeholder="Enter your email address" required />
    <button type="submit" className="btn">Subscribe</button>
  </form>
</div>





    </>
  );
}

export default Home;
