import React from 'react';
import { TagButton } from 'components/Buttons';
import './index.scss';

const TaxParams = (props) => {
  const { active, setActiveParam } = props;
  const params = [
    { id: 0, title: 'Платеж' },
    { id: 1, title: 'Срок' }
  ];
  return (
    <div className="taxParams">
      <span className="taxParams__subTitle">Что уменьшаем?</span>
      <div className="taxParams__tags">
        {params?.length &&
          params.map((param, i) => (
            <TagButton
              key={`param-${param.id}`}
              onClick={() => setActiveParam(i)}
              className="taxParams__tag"
              active={active === i}
            >
              {param.title}
            </TagButton>
          ))}
      </div>
    </div>
  );
};

export default TaxParams;
