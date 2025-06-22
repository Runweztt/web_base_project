import React, { useState } from 'react';
import './Home.css';
import { FaTimes } from 'react-icons/fa';

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
                  <button onClick={() => deleteItem(index)} className='remove-button'><FaTimes /> </button>
                </div>
              ))
            ) : (
              <p>enster search item</p>
            )}
          </div>
        )}
      </div>










      <div className="benefits-section">
  <h2>Why Choose Our Workspaces?</h2>
  <div className="benefits-grid">
    <div className="benefit-card">
      <h3>24/7 Access</h3>
      <p>Work on your schedule, anytime.</p>
    </div>
    <div className="benefit-card">
      <h3>Fast Wi-Fi</h3>
      <p>Enjoy uninterrupted, high-speed internet.</p>
    </div>
    <div className="benefit-card">
      <h3>Community Events</h3>
      <p>Network and learn through frequent events.</p>
    </div>
    <div className="benefit-card">
      <h3>Flexible Plans</h3>
      <p>Hourly, daily, or monthly options to suit you.</p>
    </div>
  </div>
</div>

    </>
  );
}

export default Home;
