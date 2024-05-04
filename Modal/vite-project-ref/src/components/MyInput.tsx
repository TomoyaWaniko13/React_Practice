import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label className={'border border-gray-300'}>
      {label}
      <input {...otherProps} ref={ref} className={'w-full h-full'} />
    </label>
  );
});
export default MyInput;
