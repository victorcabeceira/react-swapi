import React from 'react';
import Carousel from 'nuka-carousel';

import CarouselItem from './CarouselItem/CarouselItem';

// import classes from './Carousel.module.css';

const carousel = props => {
  // console.log('[CAROUSEL] ', props);
  return (
    <Carousel { ...props.carouselProps }>
      {props.items.map((item, index) => (
        <CarouselItem
          key={index}
          img={item.img}
          to={item.to}
          {...props}
        />
      ))}
    </Carousel>
  )
}

export default carousel;
