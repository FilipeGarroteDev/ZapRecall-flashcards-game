import React from "react"
import "./style.css"
import sadEmoji from "../../assets/images/sad.png"
import partyEmoji from "../../assets/images/party.png"

export default function Footer({answeredIcons}){
    {if (answeredIcons.length < 4){
      return (
        <footer>
          <h3>{answeredIcons.length}/4 CONCLUÍDOS</h3>
          <div className="iconContainer">
            {answeredIcons.map((icon) => <ion-icon name={icon}></ion-icon>)}
          </div>
        </footer>
      )
    } else {
      const correctAnswers = answeredIcons.filter(icon => icon === "checkmark-circle")
      return(correctAnswers.length === 4 ?
        <footer>
          <div>
            <img src={partyEmoji}/>
            <h4>Parabéns!</h4>
          </div>
          <span>Você não esqueceu de nenhum flashcard!</span>
          <h3>{answeredIcons.length}/4 CONCLUÍDOS</h3>
          <div className="iconContainer">
            {answeredIcons.map((icon) => <ion-icon name={icon}></ion-icon>)}
          </div>
        </footer>
      :
        <footer>
          <div>
            <img src={sadEmoji}/>
            <h4>Putz...</h4>
          </div>
          <span>Ainda faltam alguns... Mas não desanime!</span>
          <h3>{answeredIcons.length}/4 CONCLUÍDOS</h3>
          <div className="iconContainer">
            {answeredIcons.map((icon) => <ion-icon name={icon}></ion-icon>)}
          </div>
        </footer>)
    }}
      

}