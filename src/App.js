import { useState } from "react";
import React from "react";

import drumPadsA from "./components/DrumPadsA";
import drumPadsB from "./components/DrumPadsB";
import Pads from "./components/Pads";
import BankChanger from "./components/BankChanger";
import Display from "./components/Display";

import "./App.css";

const App = () => {
  const [currentData, setCurrentData] = useState("Press on pad");
  const [bank, setBank] = useState("Drums Bank");

  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const upperKey = event.key.toUpperCase();

      if (bank === "Drums Bank") {
        const foundDrum = drumPadsA.find((item) => item.key === upperKey);
        playHandler(upperKey, foundDrum.name);
      } else {
        const foundDrum = drumPadsB.find((item) => item.key === upperKey);
        playHandler(upperKey, foundDrum.name);
      }
    });
  });

  const bankChangeHandler = (bank) => {
    setCurrentData(bank);
    setBank(bank);
  };

  const playHandler = (key, name) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setCurrentData(name);
  };

  return (
    <>
      <div className="cable"></div>
      <div className="drum-machine" id="drum-machine">
        <h1 className="header">Drum Machine</h1>
        <Display name={currentData} />
        <BankChanger onBankChange={bankChangeHandler} />
        <div className="pads">
          <Pads bankName={bank} onPlay={playHandler} />
        </div>
        <footer className="footer">
          by <a href="https://codepen.io/mitol5549">mitol5549</a>
        </footer>
      </div>
    </>
  );
};

export default App;
