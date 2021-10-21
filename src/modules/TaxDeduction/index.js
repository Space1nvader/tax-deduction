import React, { useState } from 'react';

import Wrapper from 'components/Layout/Wrapper/';
import { PrimaryButton } from 'components/Buttons';
import './index.scss';
import Modal from 'components/Modal';

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
          <Modal handleClose={handleCloseModal}>123 </Modal>
        </div>
      </Wrapper>
    </section>
  );
};
export default TaxDeduction;
