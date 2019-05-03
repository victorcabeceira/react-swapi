import React, { Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import { randomRgbaGenerator, apiPropertyParser, apiValueParser } from '../../../shared/utility';

import classes from './CustomCard.module.css';

const card = props => {
  const cardStyle = {
    backgroundImage: `
      url(${props.collectionImgArray[props.collectionImgNumber]}),
      linear-gradient(
        ${randomRgbaGenerator(80)},
        rgba(0,0,0,0.35),
        rgba(30, 30, 30, 0.35))`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  }

  let card = props.children;


  if (props.filteredCollection) {
    card = (
      <Fragment>
        <div className={classes.CardContentTitle}>
          {props.collection} : {props.title}
        </div>
        {props.filteredCollection.map(fp => {
          const property = apiPropertyParser(fp[0]);
          const value = apiValueParser(fp[1]);
          return (
            <div key={`${props.objectId}_${property}`} className={classes.CardContent}>
              <div className={classes.ContentProperty}>{property} : </div>
              <div className={classes.ContentData}>{value}</div>
            </div>
          )
        })}
      </Fragment>
    )
  }

  return (
    <Card style={{ ...cardStyle, ...props.cardStyle }}>
      <CardActionArea>
        <CardContent>
          {card}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default card;