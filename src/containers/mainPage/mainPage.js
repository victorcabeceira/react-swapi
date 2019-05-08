import React from 'react';
import CustomCarousel from '../../components/UI/Carousel/Carousel';

import classes from './mainPage.module.css';

const mainPage = props => {
  const carouselItems = [
    { img: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide1', alt: 'Starships', to: '/starships' },
    { img: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide2', alt: 'Vehicles', to: '/vehicles' },
  ]

  return (
    <div>
      <div className={classes.CustomCarouselDiv}>
        <CustomCarousel
          items={carouselItems}
          carouselProps={{
            dragging: false
          }}
          {...props}
        />
      </div>
    </div>
  )
}

export default mainPage;