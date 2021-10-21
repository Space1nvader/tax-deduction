import React from 'react';
import clsx from 'clsx';
import './index.scss';

const TagButton = (props) => {
  const { className = '', active, children = 'Кнопка', ...other } = props;
  return (
    <button
      className={clsx('tagButton', className, active && 'active')}
      // eslint-disable-next-line react/button-has-type
      type="button"
      {...other}
    >
      {children}
    </button>
  );
};

export default TagButton;
