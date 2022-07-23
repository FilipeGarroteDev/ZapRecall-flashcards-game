import React from "react"
import "./style.css"
import sadEmoji from "../../assets/images/sad.png"
import partyEmoji from "../../assets/images/party.png"

export default function Footer({answeredIcons}){

  if(answeredIcons.length < 4){
    return(
      <StandardFooter answeredIcons={answeredIcons}/>
    )
  } else {
    const correctCounter = answeredIcons.filter(icon => icon === "checkmark-circle")
    return (
      correctCounter.length === 4 ? 
      <FinalMessage answeredIcons={answeredIcons}>
        <Congratulations/>
      </FinalMessage> 
      : 
      <FinalMessage answeredIcons={answeredIcons}>
        <Failed/>
      </FinalMessage> 
    )
  }
}

function StandardFooter({answeredIcons}){
    return (
      <footer>
        <div>
          <div className="iconCounter">
            <h3>{answeredIcons.length}/4 CONCLUÍDOS</h3>
            {answeredIcons.map((icon) => <ion-icon name={icon}></ion-icon>)}
          </div>
        </div>
      </footer>    
    )
}

function FinalMessage({children, answeredIcons}){
  return (
    <footer>
      <div>
        {children}
        <div className="iconCounter">
          <h3>{answeredIcons.length}/4 CONCLUÍDOS</h3>
          {answeredIcons.map((icon) => <ion-icon name={icon}></ion-icon>)}
        </div>
        <div className="restartButton">REINICIAR RECALL</div>
      </div>
    </footer>  
  )
}

function Congratulations(){
  return(
    <>
      <div className="footerTitle">
        <img src={partyEmoji} alt="party-emoji"/>
        <h4>Parabéns!</h4>
      </div>
      <span>Você não esqueceu de nenhum flashcard!</span>
    </>
  )
}

function Failed(){

  return(
    <>
      <div className="footerTitle">
        <img src={sadEmoji} alt="sad-emoji"/>
        <h4>Putz...</h4>
      </div>
      <span>Ainda faltam alguns... Mas não desanime!</span>
    </>
  )

}
