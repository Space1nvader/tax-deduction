import clsx from 'clsx';
import React from 'react';
import './index.scss';

const Checkbox = (props) => {
  const { className, name, children, ...other } = props;
  return (
    <div className={clsx('ckeckbox', className)} {...other}>
      <input type="checkbox" id={name} name={name} className="checkbox__input" />
      <label htmlFor={name} className="checkbox__label">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
