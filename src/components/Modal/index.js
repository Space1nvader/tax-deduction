import React from 'react';
import ReactModal from 'react-modal';
import { CloseButton } from 'components/Buttons';
import { coreStyle } from './style';
import './style.scss';

ReactModal.setAppElement(document.body);

const Modal = (props) => {
  const { modalOpen, handleClose, children } = props;
  return (
    <ReactModal isOpen={modalOpen} onRequestClose={handleClose} style={coreStyle}>
      <CloseButton className="ReactModal__close" onClick={handleClose} />
      <div className="ReactModal__body">{children}</div>
    </ReactModal>
  );
};

export default Modal;
