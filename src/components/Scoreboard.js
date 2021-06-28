const Scoreboard = (props) => {
  const { score } = props;
  return ( 
    <div className="Scoreboard">
      <div>Maximum Score: 35</div>
      <div>{'Current Score: ' + score.currentScore}</div>
      <div>{'Best Score: ' + score.bestScore}</div>
    </div>
  );
}
 
export default Scoreboard;