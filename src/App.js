import Header from './components/Header';
import { useState, useEffect, useRef } from 'react';
import images from './images';
import MainContainer from './components/MainContainer';

function App() {
  const initialState = [
    {
      name: "Artemis",
      img: images[0],
      beenClicked: false,
    },
    {
      name: "Barbara",
      img: images[1],
      beenClicked: false,
    },
    {
      name: "Ben the Soldier",
      img: images[2],
      beenClicked: false,
    },
    {
      name: "Bill Ponderosa",
      img: images[3],
      beenClicked: false,
    },
    {
      name: "Bruce Mathis",
      img: images[4],
      beenClicked: false,
    },
    {
      name: "Carmen",
      img: images[5],
      beenClicked: false,
    },
    {
      name: "Charlie",
      img: images[6],
      beenClicked: false,
    },
    {
      name: "Charlie's Mom",
      img: images[7],
      beenClicked: false,
    },
    {
      name: "Charlie the Lawyer",
      img: images[8],
      beenClicked: false,
    },
    {
      name: "Chief Lazarus",
      img: images[9],
      beenClicked: false,
    },
    {
      name: "Cricket",
      img: images[10],
      beenClicked: false,
    },
    {
      name: "Dayman",
      img: images[11],
      beenClicked: false,
    },
    {
      name: "Dee",
      img: images[12],
      beenClicked: false,
    },
    {
      name: "Dennis",
      img: images[13],
      beenClicked: false,
    },
    {
      name: "Fatty Magoo",
      img: images[14],
      beenClicked: false,
    },
    {
      name: "Frank",
      img: images[15],
      beenClicked: false,
    },
    {
      name: "Gail the Snail",
      img: images[16],
      beenClicked: false,
    },
    {
      name: "Goon Charlie",
      img: images[17],
      beenClicked: false,
    },
    {
      name: "Greenman",
      img: images[18],
      beenClicked: false,
    },
    {
      name: "Jackie Denardo",
      img: images[19],
      beenClicked: false,
    },
    {
      name: "Mac's Dad",
      img: images[20],
      beenClicked: false,
    },
    {
      name: "Mac",
      img: images[21],
      beenClicked: false,
    },
    {
      name: "Mac's Mom",
      img: images[22],
      beenClicked: false,
    },
    {
      name: "Mantis Toboggan",
      img: images[23],
      beenClicked: false,
    },
    {
      name: "Martina Martinez",
      img: images[24],
      beenClicked: false,
    },
    {
      name: "Maureen Ponderosa",
      img: images[25],
      beenClicked: false,
    },
    {
      name: "McPoyle Twins",
      img: images[26],
      beenClicked: false,
    },
    {
      name: "Nightman",
      img: images[27],
      beenClicked: false,
    },
    {
      name: "Old Black Man",
      img: images[28],
      beenClicked: false,
    },
    {
      name: "Ongo Gablogian",
      img: images[29],
      beenClicked: false,
    },
    {
      name: "Rum Ham",
      img: images[30],
      beenClicked: false,
    },
    {
      name: "The Lawyer",
      img: images[31],
      beenClicked: false,
    },
    {
      name: "The Waiter",
      img: images[32],
      beenClicked: false,
    },
    {
      name: "Uncle Jack",
      img: images[33],
      beenClicked: false,
    },
    {
      name: "Z",
      img: images[34],
      beenClicked: false,
    },
  ];

  const [score, setScore] = useState(
    {
      currentScore: 0,
      bestScore: 0,
      maxScore: false,
    }
  );

  const [cards, setCards] = useState(initialState);
  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {    
      if (score.currentScore === 0) {
        if (score.maxScore) {
          alert('You win! Max score!')
        } else {
          alert('You lose!');
        }
      } 
      const shuffled = cards.sort(() => Math.random() - 0.5);
      setCards(shuffled);
      console.log(cards);  
    } else {
      notInitialRender.current = true;
    }
  }, [cards, score]);

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
        ]     
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
        })
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
        })
      }
    }
  };
  

  return (
    <div className="App">
      <Header score={score} />
      <MainContainer cards={cards} change={changeState}/>
    </div>
  );
}

export default App;
