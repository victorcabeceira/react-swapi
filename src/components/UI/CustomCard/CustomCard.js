import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import CustomNavLink from '../../../components/Navigation/CustomNavLink/CustomNavLink';

import { apiPropertyParser, apiValueParser, filterUrl, getIdFromUrl, randomRgbaGenerator } from '../../../shared/utility';

import classes from './CustomCard.module.css';

const card = props => {
  let cardStyle = {
    backgroundImage: `
      url(${props.collectionImgArray[props.collectionImgNumber]}),
      linear-gradient(
        ${randomRgbaGenerator(80)},
        rgba(0,0,0,0.35),
        rgba(255, 255, 255, 0.7))`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    maxHeight: '1024px'
  }

  let card = props.children;

  if (props.filteredCollection && !props.singleData) {
    const collectionInformation = (
      <div>
        <div className={classes.CardContentTitle}>
          {props.collection} : {props.title}
        </div>
        {props.filteredCollection.map(fp => {
          const property = apiPropertyParser(fp[0]);
          const value = apiValueParser(fp[1]);
          return (
            <div key={`${props.objectId}_${property}`} className={classes.ContentFilteredCollection}>
              <div className={classes.ContentProperty}>{property} : </div>
              <div className={classes.ContentValue}>{value}</div>
            </div>
          )
        })}
      </div>
    )

    if (props.collection === 'Film') {
      cardStyle = {
        background: `
          linear-gradient(
            ${randomRgbaGenerator(80)},
            rgba(0,0,0,0.35),
            rgba(255, 255, 255, 0.7))`,
        width: '100%',
        height: '100%',
        maxHeight: '1024px'
      }

      const posterDivStyle = {
        backgroundImage: `url(${props.collectionImgArray[props.collectionImgNumber]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        width: '100%',
        height: '100%',
      }

      card = (
        <CardActionArea className={`${classes.CardContentArea} mv-md`}>
          <CardContent className={classes.CardContent}>
            <Row start='md' center='xs'>
              <Col xs={12} md={4}>
                <div className={classes.FilmPoster}>
                  <div style={posterDivStyle} className={classes.FilmPosterDiv} />
                </div>
              </Col>
              <Col xs={12} md={8} style={{ margin: '4px 0 4px' }}>
                {collectionInformation}
              </Col>
            </Row>
          </CardContent>
        </CardActionArea>
      )
    } else {
      card = (
        <CardActionArea className={`${classes.CardContentArea} mv-md`}>
          <CardContent className={classes.CardContent}>
            {collectionInformation}
          </CardContent>
        </CardActionArea>
      )
    }
  } else if (props.singleData) {
    cardStyle = { ...cardStyle, ...{ margin: '10px 0px 40px' } };
    card = (
      <div className={classes.SingleCardContent}>
        <div className={classes.SingleCardTitle}>
          {props.collection} {props.title}
        </div>

        {props.filteredCollection.map(fp => {
          const property = apiPropertyParser(fp[0]);
          const value = apiValueParser(fp[1]);
          let hasUrls = false;
          const filteredUrls = [];

          if (Array.isArray(fp[1])) {
            hasUrls = true;
            fp[1].forEach(url => filteredUrls.push(filterUrl(url)));
          } else if (fp[0] === 'homeworld') {
            if (fp[1]) {
              hasUrls = true;
              filteredUrls.push(filterUrl(fp[1]));
            }
          }

          return (
            <div key={`${fp.name}_${fp[0]}`} className={classes.SingleCardContent}>
              <div className={classes.SingleContentProperty}>{property} : {hasUrls ? `${filteredUrls.length}` : null}</div>
              {hasUrls ?
                filteredUrls.map((fu, i) => {
                  return (
                    <div key={i} className={`${classes.SingleContentData} mh-sm`} style={{ verticalAlign: 'baseline' }}>
                      <CustomNavLink
                        customTo={fu}
                        customKey={i}
                        divContent={getIdFromUrl(fu)}
                        style={{ backgroundColor: '#222222', borderRadius: '20px', minWidth: '0px' }}
                      />
                    </div>
                  )
                })
                :
                <div className={property === 'Opening crawl' ?
                  classes.SingleContentDataYellow : classes.SingleContentData}>{value}</div>
              }
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <Card style={{ ...cardStyle, ...props.cardStyle }}>
      {card}
    </Card>
  )
}

export default card;