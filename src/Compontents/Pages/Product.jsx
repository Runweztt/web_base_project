import React, { useState } from 'react';
import './Home.css';
import './Product.css'

function Product() {
  return (
    <>
            {/* home section */}
      <div className="hero-section-product">
        <div className="hero-content">
         <h1>Explore Workspaces Built for Your Ambition</h1>
           <p>Whether you're a solo creator or a growing team, find the perfect space to work, collaborate, and thrive  with all the flexibility and comfort you need.</p>

          <div className="hero-buttons">
            <button className="btn btn-outline">Book a Tour</button>
          </div>
        </div>
      </div>

      

      <div className='product-container'>
        <div className='product-grid'>

           <div className='product-service'> image </div>
           <div className='product-service'> image </div>
           <div className='product-service'> image </div>
           <div className='product-service'> image </div>
           <div className='product-service'> image </div>
           <div className='product-service'> image </div>
           



        </div>
      </div>


    </>
  )
}

export default Product