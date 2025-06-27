import React from 'react';
import './Product.css';
import './Home.css';

// Import images
import proimg1 from '../../assets/proimg1.jpg';
import proimg4 from '../../assets/proimg4.jpg';
import proimg5 from '../../assets/proimg5.jpg';
import proimg6 from '../../assets/proimg6.jpg';
import proimg7 from '../../assets/proimg7.jpg';
import proimg8 from '../../assets/proimg8.jpg';
import proimg9 from '../../assets/proimg9.jpg';
import proimg10 from '../../assets/proimg10.jpg';

const workspaceData = [
  { id: 1, image: proimg1, title: 'Open Workspace', desc: 'Perfect for freelancers and remote workers.' },

  { id: 4, image: proimg4, title: 'Virtual Office', desc: 'Professional business address and services.' },
  { id: 5, image: proimg5, title: 'Daily Desk', desc: 'Pay-as-you-go desk for short stays.' },
  { id: 6, image: proimg6, title: 'Meeting Room', desc: 'Great for client meetings and presentations.' },
  { id: 7, image: proimg7, title: 'Creative Zone', desc: 'Inspiring space for creators and artists.' },
  { id: 8, image: proimg8, title: 'Quiet Corner', desc: 'Silent workspace for deep focus.' },
  { id: 9, image: proimg9, title: 'Startup Suite', desc: 'Designed for new businesses to grow.' },
  { id: 10, image: proimg10, title: 'Event Hall', desc: 'Perfect for small events and workshops.' },
];

function Product() {
  return (
    <div className="product-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore Our Workspaces</h1>
          <p>From daily desks to team hubs, find the perfect space to grow your business or remote hustle.</p>
          <div className="hero-buttons">
            <button className="btn1">Book a Tour</button>
            <button className="btn2">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Workspaces */}
      <section className="workspace-grid">
        {workspaceData.map((space) => (
          <div className="workspace-card" key={space.id}>
            <img src={space.image} alt={space.title} />
            <h3>{space.title}</h3>
            <p>{space.desc}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Product;
