import React from 'react';
import clsx from 'clsx';

const TextButton = (props) => {
  const { type = 'button', classes = '', children = 'Кнопка', ...other } = props;
  return (
    <button
      className={clsx('button', classes && classes)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...other}
    >
      {children}
    </button>
  );
};

export default TextButton;
