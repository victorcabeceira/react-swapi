import React from 'react';
import CustomCarousel from '../../components/UI/Carousel/Carousel';
import { Element, scroller } from 'react-scroll'
import { Row, Col } from 'react-flexbox-grid';

import Tooltip from '@material-ui/core/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Movies from '../../components/UI/Movies/Movies';

import classes from './mainPage.module.css';

import peopleImage from '../../assets/images/people/3.png';
import speciesImage from '../../assets/images/species/2.png';
import starshipsImage from '../../assets/images/starships/6.png';
import vehiclesImage from '../../assets/images/vehicles/3.png';
import planetsImage from '../../assets/images/planets/jupiter.png';
import filmsImage from '../../assets/images/films';

const mainPage = props => {
  const carouselItems = [
    { img: peopleImage, alt: 'people', to: '/people', text: 'People' },
    { img: speciesImage, alt: 'species', to: '/species', text: 'Species' },
    { img: starshipsImage, alt: 'Starships', to: '/starships', text: 'Starships' },
    { img: vehiclesImage, alt: 'vehicles', to: '/vehicles', text: 'Vehicles' },
    { img: planetsImage, alt: 'planets', to: '/planets', text: 'Planets' },
    { img: filmsImage[6], alt: 'films', to: '/films', text: 'Films' },
  ]

  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

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
      <div className={classes.MainText}>
        Which data will you find here ?
        <div className={classes.MainTextIcon} onClick={() => scrollTo('movies')}>
          <Tooltip title='Click me!' placement='right'>
            <FontAwesomeIcon
              icon={faChevronDown}
              size='3x'
              color='#FFD700'
            />
          </Tooltip>
        </div>
      </div>
      <Element name='movies' className={classes.Movies}>
        <div className={classes.MoviesTitle}>
          <p>All data regarding the 7 canon movies.</p>
          <p>From episode I to VII.</p>
          <p><b className={classes.ImportantText}>Title name</b> and <b className={classes.ImportantText}>small description</b> below.</p>
        </div>
        <Row center='xs' middle='xs' className={classes.MoviesInformation}>
          <Col xs={12} className={classes.MoviesInformation}>
            <Movies />
          </Col>
        </Row>
      </Element>
    </div>
  )
}

export default mainPage;