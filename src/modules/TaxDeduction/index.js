import React, { useState } from 'react';
import Wrapper from 'components/Layout/Wrapper/';
import { PrimaryButton } from 'components/Buttons';
import Modal from 'components/Modal';
import TaxBody from './components/TaxBody';
import './index.scss';

const TaxDeduction = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="taxDeduction">
      <Wrapper>
        <div className="taxDeduction__box">
          <PrimaryButton onClick={handleOpenModal}>Налоговый вычет</PrimaryButton>
          <Modal modalOpen={modalOpen} handleClose={handleCloseModal}>
            <TaxBody />
          </Modal>
        </div>
      </Wrapper>
    </section>
  );
};
export default TaxDeduction;
