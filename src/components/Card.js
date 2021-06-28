const Card = (props) => {
  const { card, change, id} = props;
  return (
    <div className="Card" onClick={() => {change(id)}}>
      <img src={card.img} alt={card.name}></img>
      <div>{card.name}</div>
    </div>
  );
}
 
export default Card;