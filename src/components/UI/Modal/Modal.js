import React, { memo } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import classes from './Modal.module.css';

const modal = props => {
  const redirectFunction = (_) => {
    props.history.goBack();
    props.onModalClose();
  }

  return (
    <Modal
      open={props.show ? true : false}
      onClose={redirectFunction.bind(this)}
    >
      <div className={classes.Modal}>
        <Row center='xs' className={classes.ContentRow}>
          <Col xs={12}>
            {props.children}
          </Col>
        </Row>
        <Row end='xs' className={`pt-lg`}>
          <Col xs>
            <Button variant='contained' onClick={redirectFunction.bind(this)} className={classes.Button}>
              CLOSE
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default memo(
  modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);