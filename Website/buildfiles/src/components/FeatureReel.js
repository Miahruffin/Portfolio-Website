import React from 'react';
import './FeatureReel.css'; // Ensure CSS is correctly linked

const FeatureReel = () => {
    return (
        <div className="feature-reel component-full-height">
            <video controls autoplay loop muted className="reel-video">
                <source src="path_to_your_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default FeatureReel;

