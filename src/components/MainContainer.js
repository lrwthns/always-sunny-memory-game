import Card from "./Card";

const MainContainer = (props) => {
  const { cards } = props;
  return ( 
    <div className="MainContainer">
      {
        cards.map((card) => {
          return (
            <Card card={card}/>
          )
        })
      }
    </div>
  );
}
 
export default MainContainer;