import React from 'react';
import Checkbox from 'components/Сheckbox/index';
import { formatValue } from 'react-currency-input-field';
import './index.scss';

const TaxOption = (props) => {
  const { value, index } = props;
  const generateDeclination = () => {
    const count = index + 1;
    if (count === 1 || count === 4 || count === 5 || count >= 9) {
      return `в ${count}-ый год`;
      // eslint-disable-next-line
    } else if (count === 2 || (count >= 6 && count <= 8)) {
      return `в ${count}-ой год`;
    } else {
      return `в ${count}-ий год`;
    }
  };
  const generateFormatValue = (num) =>
    formatValue({
      value: num.toString(),
      suffix: ' рублей',
      groupSeparator: ' '
    });

  return (
    <div className="taxOption">
      <Checkbox name={`option-${index}`}>
        <span className="taxOption__value">{generateFormatValue(value)} рублей </span>
        <span className="taxOption__info">{generateDeclination()}</span>
      </Checkbox>
    </div>
  );
};

export default TaxOption;
