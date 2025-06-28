import React, { useState } from 'react';
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
  { id: 1, image: proimg1, title: 'Open Workspace', desc: 'Perfect for freelancers and remote workers.', price: '₦5,000/day' },


  { id: 4, image: proimg4, title: 'Virtual Office', desc: 'Professional business address and services.', price: '₦3,000/month' },
  { id: 5, image: proimg5, title: 'Daily Desk', desc: 'Pay-as-you-go desk for short stays.', price: '₦4,000/day' },
  { id: 6, image: proimg6, title: 'Meeting Room', desc: 'Great for client meetings and presentations.', price: '₦10,000/hour' },
  { id: 7, image: proimg7, title: 'Creative Zone', desc: 'Inspiring space for creators and artists.', price: '₦7,000/day' },
  { id: 8, image: proimg8, title: 'Quiet Corner', desc: 'Silent workspace for deep focus.', price: '₦6,000/day' },
  { id: 9, image: proimg9, title: 'Startup Suite', desc: 'Designed for new businesses to grow.', price: '₦30,000/month' },
  { id: 10, image: proimg10, title: 'Event Hall', desc: 'Perfect for small events and workshops.', price: '₦50,000/day' },
];

function Product() {

  const [showModal, setShowModal] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState('');

  const handleBookClick = (workspaceName) => {
    setSelectedWorkspace(workspaceName);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedWorkspace('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted!');
    setShowModal(false);
  };
  return (
    <div className="product-page">

      {/* Hero Section */}
      <div className="hero-section-product">
        <div className="hero-content">
          <h1>Explore Our Workspaces</h1>
          <p>From daily desks to team hubs, find the perfect space to grow your business or remote hustle.</p>
          <div className="hero-buttons">
            <button className="btn1">Book a Tour</button>
            <button className="btn2">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Workspaces */}
      <div className="workspace-grid">
        {workspaceData.map((space) => (
          <div className="workspace-card" key={space.id}>
            <img src={space.image} alt={space.title} />
            <h3>{space.title}</h3>
            <p>{space.desc}</p>
            <p className="price-tag">{space.price}</p>
            <button className="book-btn" onClick={() => handleBookClick(space.title)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
      {/* Popup Form */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book {selectedWorkspace}</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="date" required />
              <button type="submit" className="btn1">Confirm Booking</button>
            </form>
            <button className="close-btn" onClick={handleClose}>X</button>
          </div>
        </div>
      )}




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
    </div>
  );
}

export default Product;
