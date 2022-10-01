import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as headerStyle from "./headerStyle";

function Hearder() {
  const [clicked, setClicked] = useState(false);

  function makeIcon() {
    return clicked ? (
      <FaChevronUp
        onClick={() => {
          setClicked(false);
        }}
      />
    ) : (
      <FaChevronDown
        onClick={() => {
          setClicked(true);
        }}
      />
    );
  }
  return (
    <headerStyle.HeaderBox>
      <span
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        MathInc
      </span>
      <headerStyle.ProfileHeader>
        <div className="icon">{makeIcon()}</div>
      </headerStyle.ProfileHeader>
    </headerStyle.HeaderBox>
  );
}

export default Hearder;
