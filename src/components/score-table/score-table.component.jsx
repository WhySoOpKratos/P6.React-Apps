function ScoreTable({ scores }) {
  return (
    <>
      <h2>ScoreTable</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Dice 1 score</th>
            <th>Dice 2 score</th>
            <th>TotalScore</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => (
            <tr>
              <td>{score.one}</td>
              <td>{score.two}</td>
              <td>{score.one + score.two}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ScoreTable;

// TODO -
// 1. ADd functionality to the table so that each roll of the dice updates the score list with a new entry.
// 2. Maximum of 20 entries are possible after which first entry will be removed and new entry will be added.
// 3.  Fix the UI so that the table displays correctly.
// 4. read about ContextAPI.
