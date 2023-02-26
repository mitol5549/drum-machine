import drumPadsA from "./DrumPadsA";
import drumPadsB from "./DrumPadsB";

import "./Pads.css";

const Pads = (props) => {
  let bank = drumPadsA;

  if (props.bankName === "Drums Bank") {
    bank = drumPadsA;
  } else {
    bank = drumPadsB;
  }
  return bank.map((pad, index) => {
    const clickHandler = () => {
      props.onPlay(pad.key, pad.name);
    };

    return (
      <button
        className="drum-pad"
        id={index}
        key={pad.name}
        onClick={clickHandler}
      >
        <audio className="clip" id={pad.key} src={pad.url} />
        {pad.key}
      </button>
    );
  });
};

export default Pads;
