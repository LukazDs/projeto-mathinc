import { FaChevronDown } from "react-icons/fa";
import * as headerStyle from "./headerStyle";

function Hearder() {
  function makeIcon() {
    return <FaChevronDown />;
  }
  return (
    <headerStyle.HeaderBox>
      <span
        onClick={() => {
          console.log("CLICKED");
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
