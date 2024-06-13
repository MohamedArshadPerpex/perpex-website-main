import React from 'react';
import '../Styles/BackgroundVideo.scss';
import video from '../Images/bg.mp4'; 
import videos from '../Images/bg01.mp4'; 

const Background = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop  className='background'>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video autoPlay muted loop  className='background'>
        <source src={videos} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Background;
