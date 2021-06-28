import Header from './components/Header';
import { useState } from 'react';
import images from './images';
import MainContainer from './components/MainContainer';

function App() {
  const [cards, setCards] = useState(
    [
      {
        name: 'Artemis',
        img: images[0],
      },
      {
        name: 'Barbara',
        img: images[1]
      },
      {
        name: 'Ben the Soldier',
        img: images[2]
      },
      {
        name: 'Bill Ponderosa',
        img: images[3]
      },
      {
        name: 'Bruce Mathis',
        img: images[4]
      },
      {
        name: 'Carmen',
        img: images[5]
      },
      {
        name: 'Charlie',
        img: images[6]
      },
      {
        name: "Charlie's Mom",
        img: images[7]
      },
    ]
  )

  return (
    <div className="App">
      <Header />
      <MainContainer cards={cards} />
    </div>
  );
}

export default App;
