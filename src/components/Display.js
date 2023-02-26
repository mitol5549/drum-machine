import "./Display.css";

const Display = (props) => {
  return (
    <div className="display" id="display">
      {props.name}
    </div>
  );
};

export default Display;
