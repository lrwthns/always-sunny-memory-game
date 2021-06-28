import Header from './components/Header';
import { useState } from 'react';
import images from './images';
import MainContainer from './components/MainContainer';

function App() {
  const [score, setScore] = useState(
    {
      currentScore: 0,
      bestScore: 0
    }
  )
  const [cards, setCards] = useState(
    [
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
    ]
  )

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div className="App">
      <Header score={score} />
      <MainContainer cards={cards} shuffle={shuffleArray}/>
    </div>
  );
}

export default App;
