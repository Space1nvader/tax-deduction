import React from 'react';
import { TagButton } from 'components/Buttons';
import './index.scss';

const TaxParams = () => (
  <div className="taxParams">
    <span className="taxParams__subTitle">Что уменьшаем?</span>
    <div className="taxParams__tags">
      <TagButton className="taxParams__tag">Платеж</TagButton>
      <TagButton className="taxParams__tag">Срок</TagButton>
    </div>
  </div>
);

export default TaxParams;
