import React, { useEffect } from 'react';
import TaxOption from './components/TaxOption';
import './index.scss';

const TaxOptions = ({ options }) => {
  const test = 123;
  return (
    <div className="taxOptions">
      <span className="taxOptions__subTitle">
        Итого можете внести <br /> в качестве досрочных:
      </span>
      <div className="taxOptions__checklist">
        {options.map((option, i) => (
          <TaxOption name={`option-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default TaxOptions;
