import React from "react"

export default function Questions(){
  const questionsArray = [
    {
      id: 1,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript"
    },
    {
      id: 2,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript"
    },
    {
      id: 3,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript"
    },
    {
      id: 4,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript"
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
      {questionsArray.map(({id}, index) => (
        <Question key={id} number={index+1}/>
      ))}
    </ul>
  )
}

function Question({number, key}){
  const [closedCard, setClosedCard] = React.useState("closedQuestion")
  const [openedCard, setOpenedCard] = React.useState("openedQuestion hidden")
  const [answer, setAnswer] = React.useState("answer hidden")

  return(
    <>
      <li className={closedCard} key={key} onClick={() => {
        setClosedCard("closedQuestion hidden")
        setOpenedCard("openedQuestion")
        }}>
        Pergunta {number}
        <ion-icon name="play-outline"></ion-icon>
      </li>
      {/* <li className={openedCard} key={key}>
        Pergunta {number}
        <img src="./icons/setinha.png" alt="turn-card"/>
      </li>
      <li className={answer} key={key}>
        Pergunta {number}
        <ion-icon name="play-outline"></ion-icon>
      </li> */}
    </>
  )
}