import React from 'react';
import FeatureReel from '../components/FeatureReel';
import BlogGallery from '../components/BlogGallery';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="text-content">
          <h1>Work Smarter, not so much harder.</h1>
          <p>Learn how to work less hours and earn more!</p>
          <div className="email-form">
            <input type="email" placeholder="Email Address" />
            <button>SIGN UP</button>
            <p className="privacy-text">We respect your privacy.</p>
          </div>
        </div>
        <div className="image-content">
          {/* Assuming you have a suitable animated GIF */}
          <img src="path_to_your_animated_image.gif" alt="Animated Graphic" />
        </div>
      </div>
      <div>
        <FeatureReel />
        <BlogGallery />
      </div>
    </>
  );
};

export default Home;

