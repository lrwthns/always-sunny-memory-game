import Header from './components/Header';
import { useState } from 'react';
import MainContainer from './components/MainContainer';
import Notice from './components/Notice';
import initialState from './initialState';

function App() {
  const [message, setMessage] = useState(
    {
      isActive: false,
      text: '"The Gang Wins the Game"'
    }
  );

  const [score, setScore] = useState(
    {
      currentScore: 0,
      bestScore: 0,
      maxScore: false,
    }
  );

  const [cards, setCards] = useState(initialState);

  const changeState = (id) => {
    console.log(id);
    if (cards[id].beenClicked === false) {
      if (score.currentScore !== 34) {
        setCards([
          ...cards.slice(0, id), 
          {
            ...cards[id],
            beenClicked: true,
          },
          ...cards.slice(id+1)
        ].sort(() => Math.random() - 0.5)
        // shuffles the array    
        );
        setScore({
          ...score,
          currentScore: score.currentScore+1,
          maxScore: false,
        })
      } else {
        setCards(initialState);
        setScore({
          currentScore: 0,
          bestScore: 35,
          maxScore: true,
        });
        setMessage({
          isActive: true,
          text: '"The Gang Wins the Game"',
        });
      }
    } else {
      setCards(initialState);
      if (score.bestScore < score.currentScore) {
        setScore({
          maxScore: false,
          bestScore: score.currentScore,
          currentScore: 0,
        })
      } else {
        setScore({
          ...score,
          currentScore: 0,
          maxScore: false,
        })
      }
      setMessage({
        isActive: true,
        text: '"The Gang Loses the Game"',
      });
    }
  };

  const deactivateMessage = () => {
    setMessage({
      ...message,
      isActive: false,
    })
  }

  return (
    <div className="App">
      <Header score={score} />
      <MainContainer cards={cards} change={changeState}/>
      { message.isActive && <Notice message={message} deactivate={deactivateMessage}/> }
    </div>
  );
}

export default App;
