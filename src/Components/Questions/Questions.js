import React from "react"
import "./style.css"
import turnArrow from "../../assets/images/setinha.png"

export default function Questions(){
  const questionsArray = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes"
    },
    {
      question: "Usamos estado (state) para __",
      answer: "atualizadas devem renderizar a tela novamente"
    },
  ]

  return (
    <ul className="questions">
      {questionsArray
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map(({question, answer}, index) => (<Question key={index} number={index+1} question={question} answer={answer}/>) )}
    </ul>
  )
}

function Question({
  number,
  question, 
  answer
}){
  const [isClosed, setIsClosed] = React.useState(true)
  const [isAnswered, setIsAnswered] = React.useState(false)
  const [icon, setIcon] = React.useState("")
  const [answerStyle, setAnswerStyle] = React.useState("")

    switch(isClosed){
      case true:
        return(<ClosedCard isClosed={isClosed} setIsClosed={setIsClosed} number={number}/>);
      case false:
        return(
          <>
            {isAnswered ? <AnsweredCard icon={icon} answerStyle={answerStyle} number={number}/> : <OpenedCard isAnswered={isAnswered} setIsAnswered={setIsAnswered} setAnswerStyle={setAnswerStyle} setIcon={setIcon} question={question} answer={answer}/>}
          </>
        )
        default:
          return
    }
}

function ClosedCard({setIsClosed, isClosed, number}){
  return(
    <li className="closedQuestion" onClick={() => {
      setIsClosed(!isClosed)
      }}>
      Pergunta {number}
      <ion-icon name="play-outline"></ion-icon>
    </li>
      )
}

function OpenedCard({isAnswered, setIsAnswered, setIcon, setAnswerStyle, question, answer}){
  const [openedQuestion, setOpenedQuestion] = React.useState("openedQuestion")
  const [answerCard, setAnswerCard] = React.useState("answerCard hidden")
  return(
    <>
      <li className={openedQuestion}>
          {question}
          <img src={turnArrow} alt="turn-card" onClick={() => {
            setOpenedQuestion("hidden")
            setAnswerCard("answerCard")
          }}/>
      </li>
      <li className={answerCard}>
        {answer}
        <div className="options">
          <div className="option wrong" onClick={() => {
            setIsAnswered(!isAnswered)
            setIcon("close-circle")
            setAnswerStyle("wrongSelected")
            }}>
            Não lembrei
          </div>
          <div className="option almost" onClick={() => {
            setIsAnswered(!isAnswered)
            setIcon("help-circle")
            setAnswerStyle("almostSelected")
            }}>
            Quase não lembrei
          </div>
          <div className="option correct" onClick={() => {
            setIsAnswered(!isAnswered)
            setIcon("checkmark-circle")
            setAnswerStyle("correctSelected")
            }}>
            Zap!
          </div>
        </div>
      </li>
    </>
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