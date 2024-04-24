import './Modal.css';
import { createPortal } from 'react-dom';

const Modal = ({ handleCloseClick }) => {
  const container = document.querySelector('.container.end');
  if (!container) return null;

  return createPortal(
    <div className='modal'>
      <div className='modal__content'>
        <p>モーダル</p>
        <button type='button' onClick={handleCloseClick}>
          閉じる
        </button>
      </div>
    </div>,
    container,
  );
};

export default Modal;
