import React from "react"

export default function Questions(){
  const questionsArray = [
    {
      id: 1,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
      status: "closed"
    },
    {
      id: 2,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
      status: "closed"
    },
    {
      id: 3,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
      status: "closed"
    },
    {
      id: 4,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
      status: "closed"
    },
    // {
    //   id: 5,
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
    // {
    //   id: 6,
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
    // {
    //   id: 7,
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
    // {
    //   id: 8,
    //   question: "O que é JSX?",
    //   answer: "Uma extensão de linguagem do JavaScript"
    // },
  ]

  return (
    <ul className="questions">
      {questionsArray.map(({id}, index) => 
          <Question key={id} number={index+1} />
      )}
    </ul>
  )
}

function Question({number, key}){
    
  const [closedQuestion, setClosedQuestion] = React.useState("closedQuestion")
  const [openedQuestion, setOpenedQuestion] = React.useState("openedQuestion hidden")
  const [answer, setAnswer] = React.useState("answer hidden")

  return(
    <>
      <li className={closedQuestion} key={key} onClick={() => {
        setClosedQuestion("closedQuestion hidden")
        setOpenedQuestion("openedQuestion")
        }}>
        Pergunta {number}
        <ion-icon name="play-outline"></ion-icon>
      </li>
      <li className={openedQuestion}>
        Pergunta 1
        <img src="./icons/setinha.png" alt="turn-card" onClick={() => {
          setOpenedQuestion("openedQuestion hidden")
          setAnswer("answer")
        }}/>
      </li>
      <li className={answer} key={key}>
        Blablablablablalbalb siuahgdiuosahd aoifhadsfds bsjhbdas
        <div className="options">
          <div className="option wrong">
            Não lembrei
          </div>
          <div className="option warning">
            Quase não lembrei
          </div>
          <div className="option correct">
            Zap!
          </div>
        </div>
      </li>
    </>
  )
}

// function Question(){
//   return(
//     <>
//       <li className="openedQuestion">
//         Pergunta 1
//         <img src="./icons/setinha.png" alt="turn-card"/>
//       </li>
//       {/* <li className={answer} key={key}>
//         Pergunta {number}
//         <ion-icon name="play-outline"></ion-icon>
//       </li> */}
//     </>
//       )
// }