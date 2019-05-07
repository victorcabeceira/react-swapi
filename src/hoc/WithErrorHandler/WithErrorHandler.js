import React, { Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHandler from '../../hooks/httpErrorHandler';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, errorConfirmHandler] = useHttpErrorHandler(axios);

    return (
      <Fragment>
        <Modal
          show={error}
          onModalClose={errorConfirmHandler}
          {...props}
        >
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    )
  }
}

export default withErrorHandler;