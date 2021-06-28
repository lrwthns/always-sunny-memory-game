const Card = (props) => {
  const { card } = props;
  return (
    <div className="Card">
      <img src={card.img} alt={card.name}></img>
      <div>{card.name}</div>
    </div>
  );
}
 
export default Card;