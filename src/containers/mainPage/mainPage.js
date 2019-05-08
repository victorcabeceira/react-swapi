import React from 'react';
import CustomCarousel from '../../components/UI/Carousel/Carousel';

import classes from './mainPage.module.css';

import peopleImage from '../../assets/images/people/3.png';
import speciesImage from '../../assets/images/species/2.png';
import starshipsImage from '../../assets/images/starships/6.png';
import vehiclesImage from '../../assets/images/vehicles/3.png';
import planetsImage from '../../assets/images/planets/jupiter.png';
import filmsImage from '../../assets/images/films/7.jpg';

const mainPage = props => {
  const carouselItems = [
    { img: peopleImage, alt: 'people', to: '/people', text: 'People' },
    { img: speciesImage, alt: 'species', to: '/species', text: 'Species' },
    { img: starshipsImage, alt: 'Starships', to: '/starships', text: 'Starships' },
    { img: vehiclesImage, alt: 'vehicles', to: '/vehicles', text: 'Vehicles' },
    { img: planetsImage, alt: 'planets', to: '/planets', text: 'Planets' },
    { img: filmsImage, alt: 'films', to: '/films', text: 'Films' },
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