import React from 'react';
import Carousel from './Carousel';

const App = () => {
  const images = [
    'https://t.ly/ImT0_',
    'https://t.ly/Ajzzf',
    'https://shorturl.at/qrvG2'
  ];

  return (
    <div>
      <h1 className='text-center font-bold text-gray-600 p-2 text-xl'>React Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;
