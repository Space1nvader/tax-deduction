import React from 'react';
import clsx from 'clsx';
import './index.scss';

const TagButton = (props) => {
  const { className = '', children = 'Кнопка', ...other } = props;
  return (
    <button
      className={clsx('tagButton', className)}
      // eslint-disable-next-line react/button-has-type
      type="button"
      {...other}
    >
      {children}
    </button>
  );
};

export default TagButton;
