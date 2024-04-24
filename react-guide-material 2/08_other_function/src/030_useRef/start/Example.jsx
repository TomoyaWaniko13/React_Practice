import { useRef, useState } from 'react';

const Case1 = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  return (
    <div>
      <h3>case 1:</h3>
      <input type='text' ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>check</button>
    </div>
  );
};

const Case2 = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef();

  const onClickButton = () => {
    play ? videoRef.current.pause() : videoRef.current.play();
    setPlay((prevState) => !prevState);
  };

  return (
    <div>
      <h3>case 2:</h3>
      <video style={{ maxWidth: '600px' }} src='./sample.mp4' ref={videoRef} />
      <button onClick={onClickButton}>{play ? 'Stop' : 'Play'}</button>
    </div>
  );
};

const Case3 = () => {
  const getTime = () => new Date().toTimeString();
  const [timeState, setTimeState] = useState(getTime);
  const ref = useRef(getTime());

  const updateState = () => {
    setTimeState(getTime());
  };
  const updateRef = () => {
    ref.current = getTime();
    console.log('ref.current:' + ref.current);
  };

  return (
    <div>
      <h3>case 3:</h3>
      <p>state:{timeState}</p>
      <button onClick={updateState}>UpdateState</button>
      <p>ref: {ref.current}</p>
      <button onClick={updateRef}>UpdateRef</button>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <Case1 />
      <Case2 />
      <Case3 />
    </div>
  );
};

export default Example;
