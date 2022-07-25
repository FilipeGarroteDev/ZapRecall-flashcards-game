import "./style.css"
import loadingIcon from "../../assets/images/loading.gif"
import miniLogo from "../../assets/images/logo.png";

export default function Loading({loadingPage}){

  return (
    <div className={loadingPage}>
        <header>
          <img src={miniLogo} alt="mini-logo ZapRecall"/>
          <h1>ZapRecall</h1>
        </header>
        <div className="loading">
          <div>
            <img src={loadingIcon} alt="loading"/>
            <h3>Loading...</h3>
          </div>
          <h4>Prepare a cabeça, começamos em instantes!!</h4>
        </div>
      </div>

  )
}