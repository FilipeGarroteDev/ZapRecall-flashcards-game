import Questions from "../Questions/Questions"
import "./style.css"
import miniLogo from "../../assets/images/logo.png"

export default function MainPage(){

  return (
    <main>
      <header>
        <img src={miniLogo} alt="mini-logo ZapRecall"/>
        <h1>ZapRecall</h1>
      </header>
      <Questions />
      <footer>
        <h3>0/4 CONCLUÍDOS</h3>
      </footer>
    </main>

  )
}