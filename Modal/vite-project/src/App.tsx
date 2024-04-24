import Modal from './Modal.tsx';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={'relative z-10'} onClick={() => console.log('delegated...')}>
        <button onClick={() => setOpen(true)} className={'border border-gray-300 rounded-lg p-10 m-10'}>
          Open Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          This is the Modal
        </Modal>
      </div>
      <div className={'relative z-20 bg-red-400 p-10'}> Other content</div>
    </>
  );
}
