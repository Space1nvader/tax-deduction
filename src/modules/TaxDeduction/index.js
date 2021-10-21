import React, { useState } from 'react';
import Wrapper from 'components/Layout/Wrapper/';
import { DefaultButton, PrimaryButton, TextButton } from 'components/Buttons';
import Modal from 'components/Modal';
import Field from 'components/Field';
import TaxOptions from './components/TaxOptions';
import TaxParams from './components/TaxParams/index';
import './index.scss';

const TaxDeduction = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const calculateTax = () => {
    setOptionsOpen(true);
  };
  return (
    <section className="taxDeduction">
      <Wrapper>
        <div className="taxDeduction__box">
          <PrimaryButton onClick={handleOpenModal}>Налоговый вычет</PrimaryButton>
          <Modal modalOpen={modalOpen} handleClose={handleCloseModal}>
            <div className="taxDeduction__body">
              <h3 className="taxDeduction__title">Налоговый вычет</h3>
              <p className="taxDeduction__text">
                Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового
                вычета составляетне более 13% от своего официального годового дохода.
              </p>
              <div className="taxDeduction__form">
                <Field
                  name="tax"
                  label="Ваша зарплата в месяц"
                  className="taxDeduction__field"
                  placeholder="Введите данные"
                />
                <TextButton className="taxDeduction__calculate" onClick={calculateTax}>
                  Рассчитать
                </TextButton>
                {optionsOpen && <TaxOptions />}
                <TaxParams />
                <DefaultButton className="taxDeduction__submit">Добавить</DefaultButton>
              </div>
            </div>
          </Modal>
        </div>
      </Wrapper>
    </section>
  );
};
export default TaxDeduction;
