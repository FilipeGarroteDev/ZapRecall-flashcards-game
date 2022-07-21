import React from "react"

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

    {if(isAnswered){
      return(
      <>
        <AnsweredCard icon={icon} setIcon={setIcon}/>
      </>
      )
    }else {
      return(
        <>
          {isClosed ? <ClosedCard isClosed={isClosed} setIsClosed={setIsClosed}/> : <OpenedCard isAnswered={isAnswered} setIsAnswered={setIsAnswered} icon={icon} setIcon={setIcon}/>}
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

function OpenedCard({isAnswered, setIsAnswered, icon, setIcon}){
  const [openedQuestion, setOpenedQuestion] = React.useState("openedQuestion")
  const [answer, setAnswer] = React.useState("answer hidden")
  return(
    <>
      <li className={openedQuestion}>
          Pergunta 1
          <img src="./icons/setinha.png" alt="turn-card" onClick={() => {
            setOpenedQuestion("hidden")
            setAnswer("answer")
          }}/>
      </li>
      <li className={answer}>
        Blablablablablalbalb siuahgdiuosahd aoifhadsfds bsjhbdas
        <div className="options">
          <div className="option wrong" onClick={() => {
            setIsAnswered(!isAnswered)
            setIcon("")
            }}>
            Não lembrei
          </div>
          <div className="option warning" onClick={() => setIsAnswered(!isAnswered)}>
            Quase não lembrei
          </div>
          <div className="option correct" onClick={() => setIsAnswered(!isAnswered)}>
            Zap!
          </div>
        </div>
      </li>
    </>
  )
}

function AnsweredCard({icon, setIcon}){
  return(
    <li className="answeredQuestion" style={`color: ${fontColor}`}>
      Pergunta 1
      <ion-icon name={icon}></ion-icon>
    </li>
      )
}