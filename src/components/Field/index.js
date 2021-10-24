/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import NumberFormat from 'react-number-format';
import './index.scss';

const Field = (props) => {
  const { name, label = '', placeholder = '', error, onChange, className = '', ...other } = props;
  const [fieldValue, setFieldValue] = useState(null);
  const handleChangeFieldValue = ({ target }) => {
    setFieldValue(parseFloat(target.value));
  };

  useEffect(() => {
    if (onChange) onChange(fieldValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValue]);
  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <NumberFormat
        name={name}
        id={name}
        className={clsx('field__input', className, error && 'error')}
        onChange={handleChangeFieldValue}
        value={fieldValue || ''}
        displayType="input"
        inputMode="numeric"
        placeholder={placeholder}
        suffix=" ₽"
        {...other}
      />

      <label htmlFor={name} className="field__error">
        Значение должно быть больше 12 130
      </label>
    </div>
  );
};

export default Field;
