import React from "react"
import "./style.css"
import turnArrow from "../../assets/images/setinha.png"
import decks from "../Decks"
let deckReady

export default function Questions({setAnsweredIcons, answeredIcons, deck}){
  const [blockedRender, setBlockedRender] = React.useState(false)

  if (blockedRender === false){
    switch (deck){
      case "deckReact":
        deckReady = decks.deckReact
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        break
      case "deckHTML":
        deckReady = decks.deckHTML
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        break
      case "deckDireito":
        deckReady = decks.deckDireito
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        break
      default:
        return 
    }
  }

  return (
    <ul>
      {deckReady.map(({question, answer}, index) => <Question key={index} number={index+1} question={question} answer={answer} answeredIcons={answeredIcons} setAnsweredIcons={setAnsweredIcons} setBlockedRender={setBlockedRender}/> )}
    </ul>
  )
}

function Question({
  number,
  question, 
  answer,
  answeredIcons,
  setAnsweredIcons,
  setBlockedRender
}){
  const [isClosed, setIsClosed] = React.useState(true)
  const [isAnswered, setIsAnswered] = React.useState(false)
  const [icon, setIcon] = React.useState("")
  const [answerStyle, setAnswerStyle] = React.useState("")

    switch(isClosed){
      case true:
        return(<ClosedCard isClosed={isClosed} setIsClosed={setIsClosed} number={number} setBlockedRender={setBlockedRender}/>);
      case false:
        return(
          <>
            {isAnswered ? <AnsweredCard icon={icon} answerStyle={answerStyle} number={number}/> : <OpenedCard isAnswered={isAnswered} setIsAnswered={setIsAnswered} setAnswerStyle={setAnswerStyle} setIcon={setIcon} question={question} answer={answer} answeredIcons={answeredIcons} setAnsweredIcons={setAnsweredIcons}/>}
          </>
        )
        default:
          return
    }
}

function ClosedCard({setIsClosed, isClosed, number, setBlockedRender}){
  return(
    <li className="closedQuestion" onClick={() => {
      setIsClosed(!isClosed)
      setBlockedRender(true)
      }}>
      Pergunta {number}
      <ion-icon name="play-outline"></ion-icon>
    </li>
      )
}

function OpenedCard({isAnswered, setIsAnswered, setIcon, setAnswerStyle, question, answer, answeredIcons, setAnsweredIcons}){
  const [openedQuestion, setOpenedQuestion] = React.useState("card")
  const [answerCard, setAnswerCard] = React.useState("card answerCard")
  return(
    <div className="flashcard">
      <li className={openedQuestion}>
          {question}
          <img src={turnArrow} alt="turn-card" onClick={() => {
            setOpenedQuestion("card openedQuestion")
            setAnswerCard("card")
          }}/>
      </li>
      <li className={answerCard}>
        {answer}
        <div className="options">
          <div className="option wrong" onClick={() => {
            setIsAnswered(!isAnswered)
            setIcon("close-circle")
            setAnswerStyle("wrongSelected")
            setAnsweredIcons([...answeredIcons, "close-circle"])
            }}>
            Não lembrei
          </div>
          <div className="option almost" onClick={() => {
            setIsAnswered(!isAnswered)
            setIcon("help-circle")
            setAnswerStyle("almostSelected")
            setAnsweredIcons([...answeredIcons, "help-circle"])
            }}>
            Quase não lembrei
          </div>
          <div className="option correct" onClick={() => {
            setIsAnswered(!isAnswered)
            setIcon("checkmark-circle")
            setAnswerStyle("correctSelected")
            setAnsweredIcons([...answeredIcons, "checkmark-circle"])
            }}>
            Zap!
          </div>
        </div>
      </li>
    </div>
  )
}

function AnsweredCard({icon, answerStyle, number}){
  return(
    <li className={`answeredQuestion ${answerStyle}`}>
      Pergunta {number}
      <ion-icon name={icon}></ion-icon>
    </li>
      )
}