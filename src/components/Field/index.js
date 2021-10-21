import React from 'react';
import clsx from 'clsx';
import './index.scss';

const Field = (props) => {
  const { name, label = '', placeholder = '', className = '', ...other } = props;
  const error = 'сообщение об ошибке';
  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={clsx('field__input', className)}
        name={name}
        id={name}
        placeholder={placeholder}
        type="text"
        {...other}
      />
      <label htmlFor={name} className="field__error">
        {error}
      </label>
    </div>
  );
};

export default Field;
