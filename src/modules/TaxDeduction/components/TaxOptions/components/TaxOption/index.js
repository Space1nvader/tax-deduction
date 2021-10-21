import React from 'react';
import Checkbox from 'components/Checkbox/index';
import './index.scss';

const TaxOption = () => (
  <div className="taxOption">
    <Checkbox name="checkbox">
      <span className="taxOption__value">78 000 рублей</span>
      <span className="taxOption__info"> в 1-ый год</span>
    </Checkbox>
  </div>
);

export default TaxOption;
