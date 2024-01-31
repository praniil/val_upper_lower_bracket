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
  const [lbslot1T1, setLbslot1T1] = useState<null | string>(null);
  const [lbslot1T2, setLbslot1T2] = useState<null | string>(null);
  const [lbFinals, setLbFinals] = useState<null | string>(null);
  console.log("teams", teams);

  function handleClickS1T1(event: React.MouseEvent) {
    const value = event.currentTarget.textContent; //get the text content
    if (value == teams[0].slotP1team1) {
      if (final != null) {
        setSlot2T1(value);
        setFinal(null);
        setLbslot1T1(teams[0].slotP1team2);
        setLbFinals(null);
      } else {
        setSlot2T1(value);
        setLbslot1T1(teams[0].slotP1team2);
      }
    } else if (value == teams[0].slotP1team2) {
      if (final != null) {
        setSlot2T1(value);
        setFinal(null);
        setLbslot1T1(teams[0].slotP1team1);
        setLbFinals(null);
      } else {
        setSlot2T1(value);
        setLbslot1T1(teams[0].slotP1team1);
      }
    }
  }
  // function handleClickS1T2(event: React.MouseEvent) {
  //   const value = event.currentTarget.textContent; //get the text content
  //   console.log(value);
  //   setSlot2T1(value);
  //   console.log(setSlot2T1);
  // }

  function handleClickS2T1(event: React.MouseEvent) {
    const value = event.currentTarget.textContent; //get the text content
    if (value == teams[1].slotP2team1) {
      if (final != null) {
        setSlot2T2(value);
        setFinal(null);
        setLbslot1T2(teams[1].slotP2team2);
        setLbFinals(null);
      } else {
        setSlot2T2(value);
        setLbslot1T2(teams[1].slotP2team2);
      }
    } else if (value == teams[1].slotP2team2) {
      if (final != null) {
        setSlot2T2(value);
        setFinal(null);
        setLbslot1T2(teams[1].slotP2team1);
        setLbFinals(null);
      } else {
        setSlot2T2(value);
        setLbslot1T2(teams[1].slotP2team1);
      }
    }
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

  function lbFinal(event: React.MouseEvent) {
    const value = event.currentTarget.textContent;
    setLbFinals(value);
  }

  return (
    <div className="App w-96 h-auto m-auto">
      <h1>Higher Bracket</h1>
      <div className="grid grid-flow-col">
        <div>
          {initialTeams.map((item, index) => (
            <div>
              <ul key={index} className="m-auto">
                <li
                  className="cursor-pointer border border-blue-500 w-24 h-auto "
                  onClick={handleClickS1T1}
                  value={item.slotP1team1}
                >
                  {item.slotP1team1}
                </li>
                <li
                  className="cursor-pointer border border-blue-500 w-24 h-auto"
                  onClick={handleClickS1T1}
                  value={item.slotP1team2}
                >
                  {item.slotP1team2}
                </li>
              </ul>
              <ul key={index} className="m-auto">
                <li
                  className="cursor-pointer border border-blue-500 w-24 h-auto"
                  onClick={handleClickS2T1}
                >
                  {item.slotP2team1}
                </li>
                <li
                  className="cursor-pointer border border-blue-500 w-24 h-auto"
                  onClick={handleClickS2T1}
                >
                  {item.slotP2team2}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="m-auto">
          <div
            className="cursor-pointer border border-blue-500 w-24 h-7 m-auto"
            onClick={handleClickS2}
          >
            {slot2T1}
          </div>
          <div
            className="cursor-pointer border border-blue-500 w-24 h-7 m-auto"
            onClick={handleClickS2}
          >
            {slot2T2}
          </div>
        </div>
        <div className="cursor-pointer border border-blue-500 w-24 h-7 m-auto">
          {final}
        </div>
      </div>
      <h2> LOWER BRACKET </h2>

      <div className="grid grid-flow-col">
        <div>
          <div
            className="cursor-pointer border border-blue-500 w-24 h-7"
            onClick={lbFinal}
          >
            {lbslot1T1}
          </div>
          <div
            className="cursor-pointer border border-blue-500 w-24 h-7"
            onClick={lbFinal}
          >
            {lbslot1T2}
          </div>
        </div>
        <div className="cursor-pointer border border-blue-500 w-24 h-7 m-auto">
          {lbFinals}
        </div>
      </div>
    </div>
  );
}

export default App;
