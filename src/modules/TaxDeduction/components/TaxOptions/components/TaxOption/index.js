import React from 'react';
import Checkbox from 'components/Сheckbox/index';
import './index.scss';

const TaxOption = (props) => {
  const { name, value, index } = props;
  return (
    <div className="taxOption">
      <Checkbox name={name}>
        <span className="taxOption__value">{value} рублей</span>
        <span className="taxOption__info"> в {index}-ый год</span>
      </Checkbox>
    </div>
  );
};

export default TaxOption;
