import React, { useState, useEffect } from 'react';
import { TbSquareRoundedArrowLeft } from "react-icons/tb";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import './index.css';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, interval);
    return () => clearInterval(intervalId);
  }, [interval,nextImage]);

  const dots = [];
  for (let i = 0; i < images.length; i++) {
    dots.push(
      <span
        key={i}
        className={`dot ${i === currentImageIndex ? 'active' : ''}`}
        onClick={() => setCurrentImageIndex(i)}
      ></span>
    );
  }

  return (
    <div className="relative w-full">
      <div className="relative flex items-center justify-center">
        <img src={images[currentImageIndex]} alt="carousel" className='w-8/12' />
        <div className='absolute flex flex-col right-1/4 '>
          <button
            className="button w-18  rounded-xl "
            onClick={prevImage}
          >
            <TbSquareRoundedArrowLeft size={40} />
          </button>
          <button
            className="button w-18 rounded-xl "
            onClick={nextImage}>
            <TbSquareRoundedArrowRight size={40} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-2.5 left-1/4">
        {dots}
      </div>
    </div>
  );
};

export default Carousel;
