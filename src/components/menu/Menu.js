import { useNavigate } from "react-router-dom";
import { InfoLogo, MenuBox } from "./menuStyle";

function Menu() {
  const navigate = useNavigate();

  return (
    <MenuBox>
      <InfoLogo onClick={() => navigate("/challenge")}>
        <div className="logo">
          <span>M</span>
        </div>
      </InfoLogo>
    </MenuBox>
  );
}

export default Menu;
