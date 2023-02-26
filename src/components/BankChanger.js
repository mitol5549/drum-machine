import { useState } from "react";

import "./BankChanger.css";

const BankChanger = (props) => {
  const [bank, setBank] = useState("Chords Bank");

  const clickHandler = () => {
    if (bank === "Drums Bank") {
      setBank("Chords Bank");
    } else {
      setBank("Drums Bank");
    }
    props.onBankChange(bank);
  };

  return (
    <>
      <h1 className="bank-name__drums">Drums</h1>
      <div className="bank-changer">
        <label class="switch">
          <input type="checkbox" onClick={clickHandler} />
          <span class="slider"></span>
        </label>
      </div>
      <h1 className="bank-name__chords">Chords</h1>
    </>
  );
};

export default BankChanger;
