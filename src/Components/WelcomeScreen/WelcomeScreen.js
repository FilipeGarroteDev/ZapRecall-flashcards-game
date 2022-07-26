import React from "react"
import "./style.css"
import logo from "../../assets/images/logo.png"
import Loading from "../Loading/Loading";

export default function WelcomeScreen({screen, setScreen, setGoal, setDeck, goal, deck}){

  const [buttonStatus, setButtonStatus] = React.useState("invalid")
  const [welcome, setWelcome] = React.useState("welcome")
  const [loadingPage, setLoadingPage] = React.useState("loadingPage hidden")

  return (
    <>
      <div className={welcome}>
        <img src={logo} alt="logo ZapRecall"/>
        <h1>ZapRecall</h1>
        <input type="number" placeholder="Digite sua meta de zaps..." onChange={(goalOption) => {
          setGoal(goalOption.target.value)
          setButtonStatus("valid")
        }}></input>
        <select className="switchDeck" defaultValue="" onChange={(deckOption) => {
          setDeck(deckOption.target.value)
          setButtonStatus("valid")
        }}>
          <option value="" disabled>Escolha seu deck</option>
          <option value="deckReact">Deck de React</option>
          <option value="deckHTML">Deck de HTML</option>
          <option value="deckDireito">Deck de Direito</option>
        </select>
        <button className={buttonStatus} onClick={() => {
          if(buttonStatus !== "invalid"){
            if (deck !== "Escolha seu deck" && goal > 0 && goal <= 4){
            setTimeout(() => setScreen(!screen), 2000)
            setWelcome("hidden")
            setLoadingPage("loadingPage")
          } else { 
            alert("Meta de Zaps: Você deve escolher um número de 1 a 4!!\nDeck: Você deve esolher um dos decks existentes") 
          }}
          }
        } >Iniciar Recall!</button>
      </div>
      <Loading loadingPage={loadingPage}/>
    </>
  )
}