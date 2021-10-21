/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import clsx from 'clsx';
import './index.scss';

const Field = (props) => {
  const {
    name,
    type = 'text',
    label = '',
    placeholder = '',
    error,
    className = '',
    ...other
  } = props;

  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={clsx('field__input', className, error && 'error')}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        {...other}
      />
      <label htmlFor={name} className="field__error">
        Значение должно быть больше 12 130
      </label>
    </div>
  );
};

export default Field;
