import styled from "styled-components";

function Menu() {
  return (
    <MenuBox>
      <InfoLogo>
        <div className="logo">
          <span>M</span>
        </div>
      </InfoLogo>
    </MenuBox>
  );
}

export default Menu;

const MenuBox = styled.div`
  width: 100%;
  height: 64px;
  background: #34252f;
  border-radius: 48px 48px 0px 0px;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const InfoLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .logo {
    width: 102px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    border: 1px solid #e3dddd;
    border-radius: 28px;
    margin-bottom: 78px;

    span {
      font-family: "Bungee";
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 34px;

      color: #000000;

      backdrop-filter: blur(2px);
    }
  }
`;
