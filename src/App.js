// import { useState } from 'react';
import { useState } from "react";
import rollDice from "./libs/roll-dice";
import TitleComponent from "./components/title/title.component";
import { Dice as DiceComponent } from "./components/dice/dice.component";
import ScoreTable from "./components/score-table/score-table.component";

function App() {
  const _handleRollBoth = () => {
    setImgSrc1(rollDice());
    setImgSrc2(rollDice());
  };
  const _handleDiceClick = (id) => {
    console.log(id);
    switch (id) {
      case "dice01":
        setImgSrc1(rollDice());
        break;
      case "dice02":
        setImgSrc2(rollDice());
        break;
      default:
        break;
    }
  };

  const [imgSrc1, setImgSrc1] = useState(rollDice());
  const [imgSrc2, setImgSrc2] = useState(rollDice());

  return (
    <div className="container">
      <TitleComponent />
      <div className="row">
        <DiceComponent
          id="dice01"
          imgSrc={imgSrc1}
          onClick={_handleDiceClick}
        />
        <DiceComponent
          id="dice02"
          imgSrc={imgSrc2}
          onClick={_handleDiceClick}
        />
      </div>

      <button id="rollBtn" onClick={_handleRollBoth}>
        {" "}
        Roll the Dice{" "}
      </button>
      <div className="row">
        <ScoreTable />
      </div>
    </div>
  );
}

export default App;
