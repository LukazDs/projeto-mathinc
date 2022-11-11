import styled from "styled-components";

const InDevelopmentBox = styled.div`
    width: 100%;
    height: 100vh;
    background: white;
    display: ${(props) => (props.development ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 30px;
    }

    button {
        margin-top: 50px;
        width: 94px;
        height: 36px;
        border: 1px solid #000000;
        border-radius: 16px;
        background: #gray;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        cursor: pointer;
    }
`

const Logo = styled.img`
  object-fit: cover;
`;

export { Logo, InDevelopmentBox };
