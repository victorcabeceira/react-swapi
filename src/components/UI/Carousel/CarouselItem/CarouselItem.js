import React from 'react';

// import classes from './CarouselItem.module.css';

const carousel = props => {
  // console.log('[CAROUSELITEM] ', props);
  return (
    <img src={props.img} alt={props.src} />
  )
}

export default carousel;
