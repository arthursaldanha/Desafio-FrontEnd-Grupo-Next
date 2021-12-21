import "./App.css";
import { Circles, Card } from "./components/components.js";
import { BsSuitHeartFill } from "react-icons/bs";

function App() {
  return (
    <div className="app">
      <div className="w-circles">
        <Circles></Circles>
      </div>
      <div className="w-content">
        <h1 className="title-banner">
          Comece agora mesmo a estruturar sua contingência para{" "}
          <span>anunciar sem medo!</span>
        </h1>
        <div className="w-cards">
          <Card
            type="basic"
            value={247}
            firstColor="#36395f"
            secondColor="#33355A"
          />
          <div className="modified-card">
            <div className="modified-card-title">
              <BsSuitHeartFill className="svg-heart" />
              <span>Mais escolhido pelos clientes</span>
            </div>
            <Card
              type="premium"
              value={547}
              firstColor="#30346B"
              secondColor="#30346B"
            />
          </div>
          <div className="mini-card mini-card-1">
            <p>Você não tem equipe no momento? Recomendamos o plano Basic</p>
          </div>
          <div className="mini-card mini-card-2">
            <p>Você tem equipe? Recomendamos nosso plano Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
