import React from 'react';
import TaxOption from './components/TaxOption';
import './index.scss';

const TaxOptions = ({ options }) => (
  <div className="taxOptions">
    <span className="taxOptions__subTitle">
      Итого можете внести <br /> в качестве досрочных:
    </span>
    <div className="taxOptions__checklist">
      {options.map((option, i) => (
        // eslint-disable-next-line
        <TaxOption key={`option-${i}`} index={i}>
          {option}
        </TaxOption>
      ))}
    </div>
  </div>
);

export default TaxOptions;
