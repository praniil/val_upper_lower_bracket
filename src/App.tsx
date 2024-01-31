import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const initialTeams = [
  { slotP1team1: "SENTINELS", slotP1team2: "LOUD" },
  { slotP2team1: "LEVIATAN", slotP2team2: "100Thieves" },
];

function App() {
  const [teams, setTeams] = useState(initialTeams);
  const [slot2T1, setSlot2T1] = useState<null | string>(null);
  const [slot2T2, setSlot2T2] = useState<null | string>(null);
  const [final, setFinal] = useState<null | string>(null);
  function handleClickS1T1(event: React.MouseEvent) {
    const value = event.currentTarget.textContent; //get the text content
    console.log(value);
    setSlot2T1(value);
    console.log(setSlot2T1);
  }
  // function handleClickS1T2(event: React.MouseEvent) {
  //   const value = event.currentTarget.textContent; //get the text content
  //   console.log(value);
  //   setSlot2T1(value);
  //   console.log(setSlot2T1);
  // }

  function handleClickS2T1(event: React.MouseEvent) {
    const value = event.currentTarget.textContent; //get the text content
    console.log(value);
    setSlot2T2(value);
    console.log(slot2T1);
  }

  // function handleClickS2T2(event: React.MouseEvent) {
  //   const value = event.currentTarget.textContent; //get the text content
  //   console.log(value);
  //   setSlot2T2(value);
  //   console.log(slot2T1);
  // }

  function handleClickS2(event: React.MouseEvent) {
    const value = event.currentTarget.textContent;
    setFinal(value);
  }

  return (
    <div className="App">
      <h1 className="text-red-900 font-serif">HELLO WORLD</h1>
      <h1>Higher Bracket</h1>
      {initialTeams.map((item, index) => (
        <div>
          <ul key={index}>
            <li
              className="cursor-pointer"
              onClick={handleClickS1T1}
              value={item.slotP1team1}
            >
              {item.slotP1team1}
            </li>
            <li
              className="cursor-pointer"
              onClick={handleClickS1T1}
              value={item.slotP1team2}
            >
              {item.slotP1team2}
            </li>
          </ul>
          <ul>
            <li
              className="cursor-pointer"
              onClick={handleClickS2T1}
              key={index}
            >
              {item.slotP2team1}
            </li>
            <li
              className="cursor-pointer"
              onClick={handleClickS2T1}
              key={index}
            >
              {item.slotP2team2}
            </li>
          </ul>
        </div>
      ))}
      <div onClick={handleClickS2}>{slot2T1}</div>
      <div onClick={handleClickS2}>{slot2T2}</div>
      <div>
        Finals <div>{final}</div>
      </div>
      <h2> LOWER BRACKET </h2>
    </div>
  );
}

export default App;
