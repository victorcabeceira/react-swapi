import React from 'react';
import CustomCarousel from '../../components/UI/Carousel/Carousel';
import { Element, scroller } from 'react-scroll'

import Tooltip from '@material-ui/core/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

  const movies = [
    { id: 1, name: 'Episode I - The Phantom Menace', description: 'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.' },
    { id: 2, name: 'Episode II - Attack of the Clones ', description: 'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.' },
    { id: 3, name: 'Episode III - REVENGE OF THE SITH', description: 'Faced with haunting premonitions that his secret wife, Padmé Amidala, will die, Anakin Skywalker is seduced by the dark side.' },
    { id: 4, name: 'Episode IV - A NEW HOPE', description: 'Luke Skywalker begins a journey that will change the galaxy, as he leaves his home planet, battles the evil Empire, and learns the ways of the Force.' },
    { id: 5, name: 'Episode V - THE EMPIRE STRIKES BACK', description: 'After the destruction of the Death Star, the Empire has regrouped -- with Darth Vader leading the hunt for Luke Skywalker.' },
    { id: 6, name: 'Episode VI - RETURN OF THE JEDI', description: 'Luke Skywalker heads a mission to rescue Han Solo from the clutches of Jabba the Hutt, and faces Darth Vader one last time.' },
    { id: 7, name: 'Episode VII - THE FORCE AWAKENS', description: 'Thirty years after the defeat of the Empire, Luke Skywalker has vanished and a new threat has risen: The First Order, led by the mysterious Supreme Leader Snoke and his dark side enforcer, Kylo Ren. General Leia Organa’s military force, the Resistance — and unlikely heroes brought together by fate — are the galaxy’s only hope at thwarting a new reign of evil.' },
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
          All data regarding the 7 cannon movies, from episode I to VII.
        </div>
        {movies.map(movie => (
          <div className={classes.Movie} key={movie.id}>
            <div className={classes.MovieName}>
              {movie.name}
            </div>
            <div className={classes.MovieDescription}>
              {movie.description}
            </div>
            <div className={classes.MovieImage}>
              {movie.id}
            </div>
          </div>
        ))}
      </Element>
    </div>
  )
}

export default mainPage;