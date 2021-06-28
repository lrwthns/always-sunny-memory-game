import Scoreboard from './Scoreboard';

const Header = (props) => {
  const { score } = props;
  return ( 
    <div className="Header">
      <div className="title">
      "The Gang Plays a Memory Game"
      </div>
      <Scoreboard score={score}/>
    </div>
   );
}
 
export default Header;