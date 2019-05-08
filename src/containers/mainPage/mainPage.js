import React from 'react';
import CustomCarousel from '../../components/UI/Carousel/Carousel';

import classes from './mainPage.module.css';

import starshipsImage from '../../assets/images/starships/6.png';

const mainPage = props => {
  const carouselItems = [
    { img: starshipsImage, alt: 'Starships', to: '/starships', text: 'Starships' },
    { img: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide2', alt: 'Vehicles', to: '/vehicles', text: 'Vehicles' },
  ]

  return (
    <div className={classes.MainPageDiv}>
      <div className={classes.TopText}>Love Star wars? Get to know more about the content of Cannon movies here!</div>
      <div className={classes.CustomCarouselDiv}>
        <CustomCarousel
          items={carouselItems}
          carouselProps={{
            dragging: true,
            transitionMode: 'fade',
            speed: 500
          }}
          {...props}
        />
      </div>
    </div>
  )
}

export default mainPage;