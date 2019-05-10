import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';

import classes from './AboutPage.module.css'

const aboutPage = props => {
  const link = (url, name) => (
    <a className={classes.Link} href={url} alt={name}>{name}</a>
  )
  return (
    <Grid fluid className={classes.Grid}>
      <Row middle='xs' className={classes.MainRow}>
        <Col xs={12} md>
          <Typography align='center' gutterBottom variant='h2' className={classes.Title}>
            What is this project?
          </Typography>
          <Typography align='justify' gutterBottom variant='body1' className={classes.Content}>
            This project is a React App built using {link('https://reactjs.org/', 'React')} version 16.8,{' '}
            {link('https://github.com/axios/axios', 'Axios')}, {link('https://redux.js.org/', 'Redux')} and{' '}
            {link('https://github.com/redux-saga/redux-saga', 'Redux-Saga')}.
          </Typography>
          <Typography align='justify' gutterBottom variant='body1' className={classes.Content}>
            It consumes data from the {link('https://swapi.co/', 'SWAPI')}, an API that has all data from the 7 canon movies,
            displayed in a programatically-formatted set of data, where the data available is as stated in the statistics.
          </Typography>
        </Col>

        <Col xs={12} md={4} className={classes.StatisticsCol}>
          <Row center='xs' middle='xs'>
            <Col xs>
              <Typography align='center' gutterBottom variant='body1' className={classes.StatisticsTitle}>Statistics</Typography>
            </Col>
          </Row>

          <Row center='xs' middle='xs'>
            <Col xs={12} md>
              <Typography align='center' gutterBottom variant='body1' className={classes.Content}>People: 87</Typography>
              <Typography align='center' gutterBottom variant='body1' className={classes.Content}>Planets: 61</Typography>
              <Typography align='center' gutterBottom variant='body1' className={classes.Content}>Films: 7</Typography>
            </Col>
            <Col xs={12} md>
              <Typography align='center' gutterBottom variant='body1' className={classes.Content}>Species : 37</Typography>
              <Typography align='center' gutterBottom variant='body1' className={classes.Content}>Vehicles: 39</Typography>
              <Typography align='center' gutterBottom variant='body1' className={classes.Content}>Starships: 37</Typography>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr className={classes.Hr} />

      <Row>
        <Col xs>
          <Row center='xs' middle='xs'>
            <Col xs={2}>
              <Typography align='center' gutterBottom variant='body1' className={classes.DisclaimerTitle}>
                Copyright
              </Typography>
            </Col>
          </Row>

          <Row center='xs' middle='xs'>
            <Col xs>
              <Typography align='justify' gutterBottom variant='body1' className={classes.DisclaimerContent}>
                <strong>Star Wars</strong> and all associated names are <strong>© Lucasfilm ltd.</strong>
              </Typography>
              <Typography align='justify' gutterBottom variant='body1' className={classes.DisclaimerContent}>
                <strong>TM & © Lucasfilm Ltd. All Rights Reserved.</strong>
              </Typography>
              <Typography align='justify' gutterBottom variant='body1' className={classes.DisclaimerContent}>
                This project is open source and carries a MIT licence.
              </Typography>
              <Typography align='justify' gutterBottom variant='body1' className={classes.DisclaimerContent}>
                All data has been collected from {link('https://swapi.co/', 'SWAPI')} and other free/open source websites.
              </Typography>
              <Typography align='justify' gutterBottom variant='body1' className={classes.DisclaimerContent}>
                This website has no commercial use. Only to display my knowledge of Javascript, React and related technologies.
              </Typography>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr className={classes.Hr} />

      <Row>
        <Col xs={12} md={4}>
          Describe myself
        </Col>
        <Col xs={12} md={4}>
          Image with opacity
        </Col>
      </Row>

    </Grid>
  )
}

export default aboutPage;