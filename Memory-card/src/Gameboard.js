import RickImage from "./images/Rick.png";
import MortyImage from "./images/Morty.jpg";
import JessicaImage from "./images/Jessica.png";
import SummerImage from "./images/Summer.jpg";
import BethImage from "./images/Beth.png"
import PickleRickImage from "./images/Pickle_Rick.jpeg"
import MrPoopyButtholeImage from "./images/PoppyButthole.jpg"
import JerryImage from "./images/Jerry.png"

import ImageComponent from "./Card";
import {useState } from "react";

let Cards = [
  { image: RickImage, name: "Rick Sanchez", id: 0 },
  { image: MortyImage, name: "Morty Smith", id: 1 },
  { image: JessicaImage, name: "Jessica", id: 2 },
  { image: SummerImage, name: "Summer Smith", id: 3 },
  { image: BethImage, name: "Beth Smith", id: 4 },
  { image: JerryImage, name: "Jerry Smith", id: 5 },
  { image: PickleRickImage, name: "Pickle Rick", id: 6 },
  { image: MrPoopyButtholeImage, name: "Mr Poopy Butthole", id: 7 },
];



function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;


  while (1 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    if (currentIndex - 1 !== randomIndex) {
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return array;
}

function Gameboard(props) {
  let [stateCards, setCards] = useState(Cards);
  let [clickHistory, setClickHistory] = useState([]);
  let [bestScore, setBestScore] = useState(0);
  let [score, setScore] = useState(0);

  let checkMemory = (id) => {
    if (clickHistory.includes(id)) {
      console.log('Wrong!')  
      setScore(0);
      setClickHistory([]);
      shuffleCards();  
    }
    else {
        console.log('Nice!')
        let newClickHistory = [...clickHistory, id]
        setClickHistory(newClickHistory)
        let newScore = score + 1
        setScore(newScore);
        if(newScore>bestScore) {setBestScore(newScore)}
    }
  };

  let shuffleCards = () => {
    let shuffled = shuffle([...stateCards]);

    setCards(shuffled);
  };

  let Update = (e) => {
    const id = e.currentTarget.id
    checkMemory(id);
    shuffleCards();
  };

  return (<div className = "gameboard-container">
      best score: {bestScore} <br></br>
      score: {score}
    <div className="nes-container gameboard">
      {stateCards.map((card) => {
        return (
          <ImageComponent
            image={card.image}
            name={card.name}
            id={card.id}
            onClick={Update}
            key = {card.id}
          />
        );
      })}
    </div>
    </div>
  );
}

export default Gameboard;
