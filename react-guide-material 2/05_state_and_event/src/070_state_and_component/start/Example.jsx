import { useState } from 'react';

const Example = () => {
  const [toggle, setToggle] = useState(false);
  const toggleComponent = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Count title={'A'} key={'A'} /> : <Count title={'B'} key={'B'} />}
    </div>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      {title}:{count}
      <button onClick={countUp}>count up</button>
    </div>
  );
};

export default Example;
