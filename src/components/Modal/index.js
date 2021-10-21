import React from 'react';
import ReactModal from 'react-modal';
import coreStyle from './style';

const Modal = (props) => {
  const { modalOpen, handleClose, children, style = '' } = props;
  const customStyles = style ? { ...coreStyle, ...style } : coreStyle;
  return (
    <ReactModal
      className="modal"
      isOpen={modalOpen}
      onRequestClose={handleClose}
      style={customStyles}
    >
      <button type="button" onClick={handleClose}>
        close
      </button>
      <div className="modal__body">{children}</div>
    </ReactModal>
  );
};

export default Modal;
