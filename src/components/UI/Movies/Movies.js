import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';

import filmsImage from '../../../assets/images/films';

import classes from './Movies.module.css';

const card = props => {
  const moviesArray = [
    { id: 4, name: 'Episode I - The Phantom Menace', description: 'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.' },
    { id: 5, name: 'Episode II - Attack of the Clones ', description: 'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.' },
    { id: 6, name: 'Episode III - REVENGE OF THE SITH', description: 'Faced with haunting premonitions that his secret wife, Padmé Amidala, will die, Anakin Skywalker is seduced by the dark side.' },
    { id: 1, name: 'Episode IV - A NEW HOPE', description: 'Luke Skywalker begins a journey that will change the galaxy, as he leaves his home planet, battles the evil Empire, and learns the ways of the Force.' },
    { id: 2, name: 'Episode V - THE EMPIRE STRIKES BACK', description: 'After the destruction of the Death Star, the Empire has regrouped -- with Darth Vader leading the hunt for Luke Skywalker.' },
    { id: 3, name: 'Episode VI - RETURN OF THE JEDI', description: 'Luke Skywalker heads a mission to rescue Han Solo from the clutches of Jabba the Hutt, and faces Darth Vader one last time.' },
    { id: 7, name: 'Episode VII - THE FORCE AWAKENS', description: 'Thirty years after the defeat of the Empire, Luke Skywalker has vanished and a new threat has risen: The First Order, led by the mysterious Supreme Leader Snoke and his dark side enforcer, Kylo Ren. General Leia Organa’s military force, the Resistance — and unlikely heroes brought together by fate — are the galaxy’s only hope at thwarting a new reign of evil.' },
  ]

  const movie = (m, index) => {
    const imgStyle = {
      backgroundImage: `url(${filmsImage[index]})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }
    return (
      <NavLink
        key={m.id}
        to={`/films/${m.id}`}
        style={{ textDecoration: 'none', color: '#E8E8E8' }}
      >
        <Card className={classes.Card}>
          <Row className={classes.MovieRow}>
            <Col xs={12} md={3} className={classes.MovieImage}>
              <div style={imgStyle} />
            </Col>
            <Col xs={12} md={8}>
              <Row className={classes.MovieName}>{m.name}</Row>
              <Row className={classes.MovieDescription}>{m.description}</Row>
            </Col>
          </Row>
        </Card>
      </NavLink>
    )
  }

  return (
    <div className={classes.MainDiv}>
      {moviesArray.map((c, index) => (
        <div key={c.id}>
          {movie(c, index)}
        </div>
      ))}
    </div>
  )
}


export default card;