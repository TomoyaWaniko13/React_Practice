import { ColorfulMessage } from "./Components/ColorfulMessage";

export const App = () =>{
  const onClickButton = () => alert();
  const contentStyleA = {
    color : "blue",
    fontSize: "18px"
  };
  const contentStyleB = {
    color: "green",
    fontSize: "18px"
  }
  return (
    <>
      <h1 style={{color:"red"}}>Hello!</h1>
      <ColorfulMessage color = "blue">How are you?</ColorfulMessage>
      <ColorfulMessage color = "green" message = "I am fine!"/>
      <button onClick={onClickButton}>button</button>
q
    </>
  )
}