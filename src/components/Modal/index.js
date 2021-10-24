import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { CloseButton } from 'components/Buttons';
import { coreStyle } from './style';
import './style.scss';

const Modal = (props) => {
  const { modalOpen, handleClose, children } = props;
  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);
  return (
    <ReactModal isOpen={modalOpen} onRequestClose={handleClose} style={coreStyle}>
      <CloseButton className="ReactModal__close" onClick={handleClose} />
      {children}
    </ReactModal>
  );
};

export default Modal;
