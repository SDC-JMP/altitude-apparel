import React, {useContext, useEffect} from 'react';
import CarouselPhotos from './CarouselPhotos.jsx';
import {ProductContext} from '../context.js';
import {Carousel} from 'react-bootstrap';

function CarouselComponent() {
  const {currentStyle} =
   useContext(ProductContext);


  if (currentStyle === undefined) {
    return <center><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div></center>;
  } else {
    return (
      <Carousel interval={null}>
        {currentStyle.photos.map((image) => {
          return (
            <Carousel.Item style={{height: '30rem'}} key={image.url}>
              <CarouselPhotos image={image} key={image.url} />
            </Carousel.Item>
          );
        })}
        {console.log('carousel, ', currentStyle.name)}
      </Carousel>
    );
  };
};

export default CarouselComponent;
