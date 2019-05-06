import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

const pagination = props => {
  const { count, page } = props;
  const buttonsAmount = Math.ceil(count / 10);
  const buttonsArray = [];

  for (let i = 0; i < buttonsAmount; i++) {
    buttonsArray.push(i + 1);
  }

  return (
    <Fragment>
      {buttonsArray.map(pageNumber => {
        const customStyle = props.page === pageNumber ? {
          opacity: 0.5,
          color: '#232323',
          cursor: 'not-allowed'
        } : { }

        return (
          <Button
            onClick={() => props.onClick(pageNumber)}
            key={pageNumber}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2F2F2F',
              margin: '8px 4px 0px',
              ...customStyle,
              ...props.buttonStyle,
            }}
            disabled={page === pageNumber ? true : false}
          >
            {pageNumber}
          </Button>
        )
      })}
    </Fragment>
  )
}

export default pagination;