import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../components/Logo/Logo';
import Image from '../../../components/UI/Image/Image';
import swImg from '../../../assets/images/sw_logo_g_tm.png';
import classes from './Header.module.css';

const header = props => {
  return (
    <div className={classes.Root}>
      <AppBar position="static" style={{ background: '#222' }}>
        <Toolbar>
          <Grid fluid style={{ width: '100%' }}>
            <Row>
              <Col xs={4}>
                <NavLink
                  to={'/'}
                  exact
                  onClick={() => console.log(`logo was clicked`)}
                >
                  <Logo />
                </NavLink>
              </Col>

              <Col xs={4}>
                <Row center="xs" middle="xs" style={{ height: '100%' }}>
                  <Col xs>
                    <Image
                      src={swImg}
                      alt='Star Wars logo'
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={4}>
                <Row end="xs" middle="xs" style={{ height: '100%' }}>

                  <NavigationItems {...props} />

                </Row>
              </Col>

            </Row>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default header;