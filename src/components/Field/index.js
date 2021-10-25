/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CurrencyInput from 'react-currency-input-field';
import './index.scss';

const Field = (props) => {
  const { name, label = '', error, onChange, className = '', ...other } = props;
  const [fieldValue, setFieldValue] = useState(null);
  const handleChangeFieldValue = (value) => {
    setFieldValue(parseFloat(value));
  };

  useEffect(() => {
    if (onChange) onChange(fieldValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValue]);
  return (
    <div className="field">
      {label && (
        <label className="field__label" htmlFor={name}>
          {label}
        </label>
      )}
      <CurrencyInput
        name={name}
        id={name}
        className={clsx('field__input', className, error && 'error')}
        suffix=" ₽"
        step={1000}
        allowDecimals={false}
        allowNegativeValue={false}
        value={fieldValue || ''}
        onValueChange={handleChangeFieldValue}
        {...other}
      />
      <label htmlFor={name} className="field__error">
        Значение должно быть больше 12 130
      </label>
    </div>
  );
};

export default Field;
