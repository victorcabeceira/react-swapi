import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../components/Logo/Logo';
import Image from '../../../components/UI/Image/Image';
import swImg from '../../../assets/images/sw_logo_g_tm.png';

import classes from './Header.module.css';

const header = props => {
  return (
    <div className={classes.Root}>
      <AppBar position='static' style={{ background: '#222' }}>
        <Toolbar>
          <Grid fluid style={{ width: '100%' }}>
            <Row>
              <Col xs={2} md={4}>
                <Row middle='xs' left='xs'>
                  <Col xs={2}>
                    <div className={classes.DesktopOnly}>
                      <NavLink
                        to={'/'}
                        exact
                        onClick={() => console.log(`logo was clicked`)}
                      >
                        <Logo />
                      </NavLink>
                    </div>
                    <div className={classes.MobileOnly}>
                      <div className={classes.Icon}>
                        <FontAwesomeIcon
                          icon={faBars}
                          size='2x'
                          color='#FFFFFF'
                          onClick={() => console.log('Icon clicked')}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={10} md={4}>
                <Row center='xs' middle='xs' style={{ height: '100%' }}>
                  <Col xs>
                    <div className={classes.DesktopOnly}>
                      <Image
                        src={swImg}
                        alt='Star Wars logo'
                      />
                    </div>
                    <div className={classes.MobileOnly}>
                      <div className={classes.Image}>
                        <Image
                          src={swImg}
                          alt='Star Wars logo'
                        />
                      </div>
                    </div>

                  </Col>
                </Row>
              </Col>

              <Col xs={4} className={classes.DesktopOnly}>
                <Row end='xs' middle='xs' style={{ height: '100%' }}>

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