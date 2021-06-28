import Card from "./Card";

const MainContainer = (props) => {
  const { cards, change } = props;

  return ( 
    <div className="MainContainer">
      {
        cards.map((card, index) => {
          return (
            <Card card={card} key={index} change={change} id={index}/>
          )
        })
      }
    </div>
  );
}
 
export default MainContainer;