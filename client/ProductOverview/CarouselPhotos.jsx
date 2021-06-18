import React from 'react';


const CarouselPhotos = ({image}) => {
  if (image === []) {
    return <h2>no image</h2>;
  } else {
    return (
      <div>
        <img src={image.url} style={{height: '100%', width: 'auto'}}/>
      </div>
    );
  }
};

export default CarouselPhotos;
