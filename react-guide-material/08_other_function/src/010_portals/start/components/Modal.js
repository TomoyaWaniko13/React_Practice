import "./Modal.css";

const Modal = ({ handleCloseClick }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>Modal</p>
        <button type="button" onClick={handleCloseClick}>
            close
        </button>
      </div>
    </div>
  );
};

export default Modal;
