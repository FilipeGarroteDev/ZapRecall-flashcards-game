
export default function MainPage(){
  const questionsArray = [1, 2, 3, 4]

  return (
    <main>
      <header>
        <img src="./icons/logo-pequeno.png" alt="mini-logo ZapRecall"/>
        <h1>ZapRecall</h1>
      </header>
      {questionsArray.map((question) => (
        <Question number={question} />
      ))}
      <footer>
        <h3>0/4 CONCLUÍDOS</h3>
      </footer>
    </main>

  )
}

function Question({number}){


  return(
    <div className="closedQuestion">
      <span>Pergunta {number}</span>
      <ion-icon name="play-outline"></ion-icon>
    </div>
  )
}