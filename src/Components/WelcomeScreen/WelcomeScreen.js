import "./style.css"
import logo from "../../assets/images/logo.png"

export default function WelcomeScreen({screen, setScreen}){

  return (
    <div className="welcome">
      <img src={logo} alt="logo ZapRecall"/>
      <h1>ZapRecall</h1>
      <button onClick={() => setScreen(!screen)}>Iniciar Recall!</button>
    </div>
  )
}