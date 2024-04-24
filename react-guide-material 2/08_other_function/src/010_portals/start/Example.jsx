import { createPortal } from 'react-dom';
import { useState } from 'react';
import Modal from '../end/components/Modal.jsx';

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div onClick={() => console.log('delegated.')}>
      <div className='container end' onClick={() => console.log('container')} />

      <button type='button' onClick={() => setModalOpen(true)} disabled={modalOpen}>
        モーダルを表示する
      </button>

      {modalOpen && <Modal handleCloseClick={() => setModalOpen(false)} />}
    </div>
  );
};

export default Example;
