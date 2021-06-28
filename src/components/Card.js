const Card = (props) => {
  const { card, shuffle } = props;
  return (
    <div className="Card" onClick={shuffle}>
      <img src={card.img} alt={card.name}></img>
      <div>{card.name}</div>
    </div>
  );
}
 
export default Card;