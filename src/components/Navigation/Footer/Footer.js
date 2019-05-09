import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ExternalLink from '../../Navigation/ExternalLink/ExternalLink';

import Page from '../../UI/Page/Page';

import classes from './Footer.module.css';

const footer = props => {
  return (
    <div className={classes.Footer}>
      <AppBar style={{ background: '#222', top: 'auto' }} className={classes.FooterRoot}>
        <Toolbar>
          <Page>
            <Row center='md' middle='md' style={{ minHeight: '120px' }}>

              <Col md={4} style={{ height: '100%' }}>
                <Row center='md' middle='md'>
                  <Col md>
                    About page
                  </Col>
                </Row>

                <hr />

                <Row middle='md' around='md'>
                  <Col md={1}>
                    <ExternalLink
                      isIcon
                      title='Source code'
                      href='https://github.com/victorcabeceira/react-swapi'
                      icon={['fab', 'github-alt']}
                      size='2x'
                      color='#FFFFFF'
                    />
                  </Col>
                  <Col md={1}>
                    <ExternalLink
                      isIcon
                      title='Developer Linkedin'
                      href='https://www.linkedin.com/in/victor-fellipe/'
                      icon={['fab', 'linkedin']}
                      size='2x'
                      color='#FFFFFF'
                    />
                  </Col>
                  <Col md={1}>
                    <ExternalLink
                      isIcon
                      title='Send me an email'
                      href='mailto:victorfgcabeceira@gmail.com'
                      icon={faEnvelope}
                      size='2x'
                      color='#FFFFFF'
                    />
                  </Col>
                </Row>
              </Col>

              <Col md={4} className={classes.SecondMainCol}>
                <Row center='md' middle='md'>
                  <Col md>
                    <p>
                      Star Wars and all associated names are © Lucasfilm ltd.
                    </p>
                    <p>
                      TM & © Lucasfilm Ltd. All Rights Reserved.
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <Row center='md' middle='md'>
                  <Col md>
                    All content displayed here is from:
                    <ExternalLink
                      title='SWAPI'
                      href='https://swapi.co/'
                    />
                  </Col>
                </Row>

                <hr />

                <Row center='md' middle='md'>
                  <Col md>
                    <ExternalLink
                      title='Official star wars page website link'
                      href='https://www.starwars.com/'
                    />
                  </Col>
                </Row>
              </Col>

            </Row>

          </Page>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default footer;