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
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    // {
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
    // {
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
    // {
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
    // {
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
  ]

  return (
    <ul className="questions">
      {questionsArray.map((value, index) => 
          <Question key={index} number={index+1} />
      )}
    </ul>
  )
}

function Question(){
  const [isClosed, setIsClosed] = React.useState(true)
  const [isAnswered, setIsAnswered] = React.useState(false)
  const [icon, setIcon] = React.useState("")
  const [answerStyle, setAnswerStyle] = React.useState("")

    {if(isAnswered){
      return(
      <>
        <AnsweredCard icon={icon} answerStyle={answerStyle}/>
      </>
      )
    }else {
      return(
        <>
          {isClosed ? <ClosedCard isClosed={isClosed} setIsClosed={setIsClosed}/> : <OpenedCard isAnswered={isAnswered} setIsAnswered={setIsAnswered} setAnswerStyle={setAnswerStyle} setIcon={setIcon}/>}
        </>
        )
    }}
}

function ClosedCard({setIsClosed, isClosed}){
  return(
    <li className="closedQuestion" onClick={() => {
      setIsClosed(!isClosed)
      }}>
      Pergunta 1
      <ion-icon name="play-outline"></ion-icon>
    </li>
      )
}

function OpenedCard({isAnswered, setIsAnswered, setIcon, setAnswerStyle}){
  const [openedQuestion, setOpenedQuestion] = React.useState("openedQuestion")
  const [answer, setAnswer] = React.useState("answer hidden")
  return(
    <>
      <li className={openedQuestion}>
          Pergunta 1
          <img src={turnArrow} alt="turn-card" onClick={() => {
            setOpenedQuestion("hidden")
            setAnswer("answer")
          }}/>
      </li>
      <li className={answer}>
        Blablablablablalbalb siuahgdiuosahd aoifhadsfds bsjhbdas
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

function AnsweredCard({icon, answerStyle}){
  return(
    <li className={`answeredQuestion ${answerStyle}`}>
      Pergunta 1
      <ion-icon name={icon}></ion-icon>
    </li>
      )
}