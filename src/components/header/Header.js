import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as headerStyle from "./headerStyle";
import image from "../../assets/images/images.jpeg";
import { PopUpHeader } from "../popup/PopUp";

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
        <img
          src={image}
          alt="perfil"
          onClick={() => {
            setClicked(!clicked);
          }}
        />
      </headerStyle.ProfileHeader>
      <PopUpHeader clicked={clicked} />
    </headerStyle.HeaderBox>
  );
}

export default Hearder;
