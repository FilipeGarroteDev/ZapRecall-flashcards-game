import Questions from "./Questions"

export default function MainPage(){

  return (
    <main>
      <header>
        <img src="./icons/logo-pequeno.png" alt="mini-logo ZapRecall"/>
        <h1>ZapRecall</h1>
      </header>
      <Questions />
      <footer>
        <h3>0/4 CONCLUÍDOS</h3>
      </footer>
    </main>

  )
}

