// import { useState } from 'react';
import { useEffect, useState } from "react";
import rollDice from "./libs/roll-dice";
import TitleComponent from "./components/title/title.component";
import { Dice as DiceComponent } from "./components/dice/dice.component";
import ScoreTable from "./components/score-table/score-table.component";

function App() {
  const _handleRollBoth = () => {
    setcScore({
      one: rollDice(),
      two: rollDice(),
    });
  };

  const _handleDiceClick = (id) => {
    // console.log(id);
    switch (id) {
      case "dice01":
        setcScore({
          one: rollDice(),
          two: cScore.two,
        });
        break;
      case "dice02":
        setcScore({
          two: rollDice(),
          one: cScore.one,
        });
        break;
      default:
        break;
    }
  };

  const [cScore, setcScore] = useState({
    one: rollDice(),
    two: rollDice(),
  });

  const [scores, setScores] = useState([]);

  useEffect(() => {
    console.log(cScore);
    let newScores = [...scores];
    newScores.push(cScore);
    setScores(newScores);
  }, [cScore]);

  return (
    <div className="container">
      <TitleComponent />
      <div className="row">
        <DiceComponent
          id="dice01"
          imgSrc={`images/dice${cScore.one}.png`}
          onRoll={_handleDiceClick}
        />
        <DiceComponent
          id="dice02"
          imgSrc={`images/dice${cScore.two}.png`}
          onRoll={_handleDiceClick}
        />
      </div>

      <button id="rollBtn" onClick={_handleRollBoth}>
        {" "}
        Roll the Dice{" "}
      </button>
      <div className="row">
        <ScoreTable scores={scores} />
      </div>
    </div>
  );
}

export default App;
