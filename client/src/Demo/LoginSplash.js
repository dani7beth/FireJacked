import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/jonathan-borba-zfPOelmDc-M-unsplash.jpg";
import logo from "../Logos/TransparentBackground/FirejackedFeelTheBurnTransparentBackground1x/White Text.png";
import { Button } from "react-bootstrap";
const LoginSplash = () => {
  return (
    <Background>
      <Logo url={logo}>
        <img
          src={logo}
          style={{
            width: "500px",
            height: "300px",
            objectFit: "cover",
            objectPosition: "0 -100px",
          }}
        />
        <h3 style={{ fontStyle: "italic" }}>SET/TRACK/SUCCEED</h3>
      </Logo>
      <div>
        <StyledButton href="/login">Login</StyledButton>
        <StyledButton2 href="/user_register">Register</StyledButton2>
      </div>
    </Background>
  );
};
export default LoginSplash;
export const Background = styled.div`
  background: url(${backgroundPhoto}) no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
export const Logo = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 4px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  width: 50%;
  height: auto;
  padding: 20px;
`;
export const StyledButton = styled(Button)`
  background-color: #febd4a;
  border-color: #febd4a;
  margin-top: 15px;
  width: 100px;
  margin-right: 20px;
  &:hover {
    background-color: #fab232;
    border-color: #fab232;
  }
`;
export const StyledButton2 = styled(Button)`
  background-color: #f4731f;
  border-color: #f4731f;
  margin-top: 15px;
  width: 100px;
  margin-left: 20px;
  &:hover {
    background-color: #f2670c;
    border-color: #f2670c;
  }
`;
