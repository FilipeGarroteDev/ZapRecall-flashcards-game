
export default function WelcomeScreen({screen, setScreen}){

  return (
    <div className="welcome">
      <img src="./icons/logo.png" alt="logo ZapRecall"/>
      <h1>ZapRecall</h1>
      <button onClick={() => setScreen(!screen)}>Iniciar Recall!</button>
    </div>
  )
}