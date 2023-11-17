import { useState } from 'react';
import ColorfulMessage  from './Components/ColorfulMessage';


export const App = ()=>{
  console.log("App has been rerendered.")
  const [num,setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);

  const onClickCountup = () =>{
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  }

  const onClickToggle = () =>{
    setIsShowFace(!isShowFace);
  }
  
  if(num % 3 === 0){
    isShowFace|| setIsShowFace(true);
  }else{
    isShowFace && setIsShowFace(false);
  }

  return(
    <>
      <h1 style={{color:"red"}}>Hello!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="red">I am fine!</ColorfulMessage>
      <button onClick={onClickCountup}>Count up!</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>^_^</p>}
    </>
  );
};
