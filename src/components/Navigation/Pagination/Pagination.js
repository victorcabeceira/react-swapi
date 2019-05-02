import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

const pagination = props => {
  const { count } = props;
  const buttonsAmount = Math.ceil(count / 10);
  const buttonsArray = [];

  for (let i = 0; i < buttonsAmount; i++) {
    buttonsArray.push(i+1);
  }

  return (
    <Fragment>
      {buttonsArray.map(pageNumber => (
        <Button
          onClick={() => props.onClick(pageNumber)}
          key={pageNumber}
          style={{ ...props.buttonStyle }}
        >
          {pageNumber}
        </Button>
      ))}
    </Fragment>
  )
}

export default pagination;