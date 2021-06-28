import Card from "./Card";

const MainContainer = (props) => {
  const { cards, shuffle } = props;

  return ( 
    <div className="MainContainer">
      {
        cards.map((card) => {
          return (
            <Card card={card} shuffle={shuffle}/>
          )
        })
      }
    </div>
  );
}
 
export default MainContainer;