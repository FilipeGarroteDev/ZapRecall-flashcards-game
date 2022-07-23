import "./style.css"
import logo from "../../assets/images/logo.png"

export default function WelcomeScreen({screen, setScreen, setGoal}){

  return (
    <div className="welcome">
      <img src={logo} alt="logo ZapRecall"/>
      <h1>ZapRecall</h1>
      <input className="zapGoal" placeholder="Digite sua meta de zaps..." onChange={(valor) => {
        setGoal(valor.target.value)
      }}></input>
      <input className="switchDeck" placeholder="Escolha seu deck"></input>
      <button onClick={() => setScreen(!screen)}>Iniciar Recall!</button>
    </div>
  )
}