import Header from './components/Header';
import { useState } from 'react';
import images from './images';
import MainContainer from './components/MainContainer';

function App() {
  const [cards, setCards] = useState(
    [
      {
        name: "Artemis",
        img: images[0],
      },
      {
        name: "Barbara",
        img: images[1]
      },
      {
        name: "Ben the Soldier",
        img: images[2]
      },
      {
        name: "Bill Ponderosa",
        img: images[3]
      },
      {
        name: "Bruce Mathis",
        img: images[4]
      },
      {
        name: "Carmen",
        img: images[5]
      },
      {
        name: "Charlie",
        img: images[6]
      },
      {
        name: "Charlie's Mom",
        img: images[7]
      },
      {
        name: "Charlie the Lawyer",
        img: images[8]
      },
      {
        name: "Chief Lazarus",
        img: images[9]
      },
      {
        name: "Cricket",
        img: images[10]
      },
      {
        name: "Dayman",
        img: images[11]
      },
      {
        name: "Dee",
        img: images[12]
      },
      {
        name: "Dennis",
        img: images[13]
      },
      {
        name: "Fatty Magoo",
        img: images[14]
      },
      {
        name: "Frank",
        img: images[15]
      },
      {
        name: "Gail the Snail",
        img: images[16]
      },
      {
        name: "Goon Charlie",
        img: images[17]
      },
      {
        name: "Greenman",
        img: images[18]
      },
      {
        name: "Jackie Denardo",
        img: images[19]
      },
      {
        name: "Mac's Dad",
        img: images[20]
      },
      {
        name: "Mac",
        img: images[21]
      },
      {
        name: "Mac's Mom",
        img: images[22]
      },
      {
        name: "Mantis Toboggan",
        img: images[23]
      },
      {
        name: "Martina Martinez",
        img: images[24]
      },
      {
        name: "Maureen Ponderosa",
        img: images[25]
      },
      {
        name: "McPoyle Twins",
        img: images[26]
      },
      {
        name: "Nightman",
        img: images[27]
      },
      {
        name: "Old Black Man",
        img: images[28]
      },
      {
        name: "Ongo Gablogian",
        img: images[29]
      },
      {
        name: "Rum Ham",
        img: images[30]
      },
      {
        name: "The Lawyer",
        img: images[31]
      },
      {
        name: "The Waiter",
        img: images[32]
      },
      {
        name: "Uncle Jack",
        img: images[33]
      },
      {
        name: "Z",
        img: images[34]
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
      <Header />
      <MainContainer cards={cards} shuffle={shuffleArray}/>
    </div>
  );
}

export default App;
