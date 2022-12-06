import { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as headerStyle from "./headerStyle";
import { PopUpHeader } from "../popup/PopUp";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Hearder() {
  const [clicked, setClicked] = useState(false);
  const { imageProfile } = useContext(UserContext);
  const navigate = useNavigate();

  const imageDefault = localStorage.getItem("profileUrl")
    ? localStorage.getItem("profileUrl")
    : imageProfile;

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
          navigate("/posts");
        }}
      >
        MathInc
      </span>
      <headerStyle.ProfileHeader>
        <div className="icon">{makeIcon()}</div>
        <img
          src={imageDefault}
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
