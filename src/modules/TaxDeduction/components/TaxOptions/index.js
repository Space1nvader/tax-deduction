import React from 'react';
import TaxOption from './components/TaxOption';
import './index.scss';

const TaxOptions = () => (
  <div className="taxOptions">
    <span className="taxOptions__subTitle">
      Итого можете внести <br /> в качестве досрочных:
    </span>
    <div className="taxOptions__checklist">
      <TaxOption />
      <TaxOption />
      <TaxOption />
      <TaxOption />
    </div>
  </div>
);

export default TaxOptions;
