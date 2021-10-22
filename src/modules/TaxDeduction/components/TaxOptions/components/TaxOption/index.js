import React from 'react';
import Checkbox from 'components/Сheckbox/index';
import './index.scss';

const TaxOption = (props) => {
  const { children, index } = props;
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

  return (
    <div className="taxOption">
      <Checkbox name={`option-${index}`}>
        <span className="taxOption__value">{children} рублей </span>
        <span className="taxOption__info">{generateDeclination()}</span>
      </Checkbox>
    </div>
  );
};

export default TaxOption;
