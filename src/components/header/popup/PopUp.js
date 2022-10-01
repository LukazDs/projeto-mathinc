import { useNavigate } from "react-router-dom";
import { PopUpMenuBox } from "./popUpStyle";

export function PopUpHeader({ clicked }) {
  const navigate = useNavigate();

  function makePopUp() {
    return clicked ? (
      <PopUpMenuBox
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        <span>Logout</span>
      </PopUpMenuBox>
    ) : (
      ""
    );
  }

  return makePopUp();
}
