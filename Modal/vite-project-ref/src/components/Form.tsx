import MyInput from './MyInput.tsx';
import { useRef } from 'react';

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label={'Enter your name:'} ref={ref} />
      <button type='button' onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
export default Form;
