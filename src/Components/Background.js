import React from 'react';
import '../Styles/BackgroundVideo.scss';
import video from '../Images/bg.mp4'; 

const Background = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop controls className='background'>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Background;
