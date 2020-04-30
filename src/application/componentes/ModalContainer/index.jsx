import React from 'react';
import {Modal} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import ModalContainerStyle  from './styled'

const UseStyles = makeStyles( (theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children} = props;
 const classes = UseStyles();
  return(
    <ModalContainerStyle>
      <Modal className={classes.modal} open={isOpenModal} onClose={closeModal} closeAfterTransition>
        <div>{children}</div>
      </Modal>
    </ModalContainerStyle>
  );
}
