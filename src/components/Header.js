import Scoreboard from './Scoreboard';

const Header = (props) => {
  return ( 
    <div className="Header">
      <div className="title">
      "The Gang Plays a Memory Game"
      </div>
      <Scoreboard />
    </div>
   );
}
 
export default Header;