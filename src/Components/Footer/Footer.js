import React from "react"
import "./style.css"
import sadEmoji from "../../assets/images/sad.png"
import partyEmoji from "../../assets/images/party.png"

export default function Footer({answeredIcons}){
  
  return (
      <footer>
        <h3>{answeredIcons.length}/4 CONCLUÍDOS</h3>
        <div className="iconContainer">
          {answeredIcons.map((icon) => <ion-icon name={icon}></ion-icon>)}
        </div>
      </footer>
  )
}