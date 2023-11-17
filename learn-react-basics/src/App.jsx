
import { ColorfulMessage } from './Components/ColorfulMessage';

export const App =()=>{
  const onClickButton = () => alert();
  return(
    <>
      <h1 style={{color:"red"}}>Hello!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="green">I am fine!</ColorfulMessage>
      <button onClickButton="{onClickButton}">button</button>
    </>
  )
}