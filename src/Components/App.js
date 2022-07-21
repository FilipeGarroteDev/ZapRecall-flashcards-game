import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import MainPage from "./MainPage";

export default function App(){
  const [screen, setScreen] = React.useState(true)

  return (
    <>
      {screen ? <WelcomeScreen screen={screen} setScreen={setScreen}/> : <MainPage />}
    </>
  )
}