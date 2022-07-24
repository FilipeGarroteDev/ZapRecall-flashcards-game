import React from "react";
import "../../assets/css/reset.css"
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import MainPage from "../MainPage/MainPage";
import "./style.css"

export default function App(){
  const [screen, setScreen] = React.useState(true);
  const [goal, setGoal] = React.useState(0);
  const [deck, setDeck] = React.useState("Escolha seu deck");

  return (
    <>
      {screen ? <WelcomeScreen screen={screen} setScreen={setScreen} setGoal={setGoal} setDeck={setDeck} goal={goal} deck={deck} /> : <MainPage  screen={screen} setScreen={setScreen} goal={goal} deck={deck}/>}
    </>
  )
}