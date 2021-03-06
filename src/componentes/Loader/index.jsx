import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../pages/Home/assets/restaurants-loading.json';

export default () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      },
    };
  return <Lottie options={defaultOptions} />;
  };
    
        
    