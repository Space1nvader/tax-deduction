import React, { useState, useEffect } from 'react';
import Field from 'components/Field';
import { DefaultButton, TextButton } from 'components/Buttons';
import TaxOptions from '../TaxOptions';
import TaxParams from '../TaxParams/index';
import { calculate } from '../../calculate';

const TaxBody = () => {
  const [activeParam, setActiveParam] = useState(0);
  const [calculatedParamas, setCalculatedParamas] = useState({
    value: null,
    calculated: null
  });

  const handleSetFieldValue = (e) => {
    setCalculatedParamas({ ...calculatedParamas, value: e.target.value });
  };
  const calculateTax = () => {
    if (calculatedParamas.value > 0) calculate(calculatedParamas, setCalculatedParamas);
  };

  return (
    <div className="taxDeduction__body">
      <h3 className="taxDeduction__title">Налоговый вычет</h3>
      <p className="taxDeduction__text">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета
        составляетне более 13% от своего официального годового дохода.
      </p>
      <div className="taxDeduction__form">
        <Field
          name="summ"
          label="Ваша зарплата в месяц"
          className="taxDeduction__field"
          placeholder="Введите данные"
          value={calculatedParamas.value || ''}
          onChange={handleSetFieldValue}
        />
        <TextButton className="taxDeduction__calculate" onClick={calculateTax}>
          Рассчитать
        </TextButton>
        {calculatedParamas.calculated > 0 && <TaxOptions options={calculatedParamas.calculated} />}
        <TaxParams active={activeParam} setActiveParam={setActiveParam} />
        <DefaultButton className="taxDeduction__submit">Добавить</DefaultButton>
      </div>
    </div>
  );
};

export default TaxBody;