import React from "react";
import "../../assets/css/reset.css"
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import MainPage from "../MainPage/MainPage";
import "./style.css"

export default function App(){
  const [screen, setScreen] = React.useState(true);
  const [goal, setGoal] = React.useState(1);

  return (
    <>
      {screen ? <WelcomeScreen screen={screen} setScreen={setScreen} setGoal={setGoal}/> : <MainPage  screen={screen} setScreen={setScreen} goal={goal}/>}
    </>
  )
}