import React from "react";
import Questions from "../Questions/Questions";
import "./style.css";
import miniLogo from "../../assets/images/logo.png";
import Footer from "../Footer/Footer";


export default function MainPage(){
  const [answeredIcons, setAnsweredIcons] = React.useState([])

  return (
    <main>
      <header>
        <img src={miniLogo} alt="mini-logo ZapRecall"/>
        <h1>ZapRecall</h1>
      </header>
      <Questions setAnsweredIcons={setAnsweredIcons} answeredIcons={answeredIcons}/>
      <Footer answeredIcons={answeredIcons}/>
    </main>

  )
}