import React from 'react';

import classes from './AboutPage.module.css'

const aboutPage = props => {
  return (
    <div className={classes.MainDiv}>
      <p>About page!</p>
      <p>Describe website purpose</p>
      <p>Introduce myself.</p>
      <p>No commercial use. Only to display my knowledge on Javascript, React and related technologies.</p>
      <p>Techonologies used.</p>
    </div>
  )
}

export default aboutPage;