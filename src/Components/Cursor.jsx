import "../App.css";
import { useRef } from "react";

function Cursor(props) {
  const cursorElement = useRef();

  const position = {
    top: props.y - cursorElement?.current?.offsetHeight / 2 || 0,
    left: props.x - cursorElement?.current?.offsetWidth / 2 || 0,
  };

  return (
    <div
      ref={cursorElement}
      id="cursor"
      className="cursor-game _hide_mobile "
      style={position}
    ></div>
  );
}

export default Cursor;
