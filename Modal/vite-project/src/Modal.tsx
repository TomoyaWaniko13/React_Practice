// const Modal = ({ open, onClose, children }) => {
//   if (!open) return null;
//   return (
//     <>
//       <div className={'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50'} />
//       <div className={'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-50'}>
//         <button onClick={onClose} className={'border border-gray-300 rounded-lg p-3 m-10'}>
//           close
//         </button>
//         {children}
//       </div>
//     </>
//   );
// };
//
// export default Modal;

import ReactDOM from 'react-dom';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  const el = document.getElementById('portal');
  if (!el) return null; // or create and append a new element

  return ReactDOM.createPortal(
    <>
      <div className={'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50'} />
      <div className={'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-50'}>
        <button onClick={onClose} className={'border border-gray-300 rounded-lg p-3 m-10'}>
          close
        </button>
        {children}
      </div>
    </>,
    el,
  );
};

export default Modal;
