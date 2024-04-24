const Example = () => {
  let value;
  return (
    <>
      <input type='text' onChange={(event) => (value = event.target.value)} />
      {value}
    </>
  );
};

export default Example;
