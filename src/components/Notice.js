const Notice = (props) => {
  const { message, deactivate } = props;
  return ( 
    <div className="Notice">
      <div className="message-container">
        <div className="message">{ message.text }</div>
        <button onClick={deactivate}>Start Over</button>
      </div>
    </div>
   );
}
 
export default Notice;