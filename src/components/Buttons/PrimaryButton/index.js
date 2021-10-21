import React from 'react';
import clsx from 'clsx';
import './index.scss';

const PrimaryButton = (props) => {
  const { type = 'button', className = '', children = 'Кнопка', ...other } = props;
  return (
    <button
      className={clsx('primaryButton', className)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...other}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
