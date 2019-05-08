import React from 'react';
import CustomCarousel from '../../components/UI/Carousel/Carousel';

import classes from './mainPage.module.css';

import starshipsImage from '../../assets/images/starships/6.png';

const mainPage = props => {
  const carouselItems = [
    { img: starshipsImage, alt: 'Starships', to: '/starships' },
    { img: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide2', alt: 'Vehicles', to: '/vehicles' },
  ]

  return (
    <div className={classes.CustomCarouselDiv}>
      <CustomCarousel
        items={carouselItems}
        carouselProps={{
          dragging: true
        }}
        {...props}
      />
    </div>
  )
}

export default mainPage;