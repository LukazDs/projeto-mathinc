import styled from "styled-components";

const HeaderBox = styled.menu`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 24px;
  background: #221221;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  span {
    margin-left: 3%;
    font-family: "Bungee";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ProfileHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2%;
  .icon {
    color: #ffffff;
    margin-right: 16px;
    cursor: pointer;
  }
  img {
    width: 53px;
    height: 53px;
    object-fit: cover;
    text-align: center;
    cursor: pointer;
    background: white;
    border-radius: 26.5px;
  }
`;

export { HeaderBox, ProfileHeader };
