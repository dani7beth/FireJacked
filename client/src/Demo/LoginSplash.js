import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/jonathan-borba-zfPOelmDc-M-unsplash.jpg";
import logo from "../Logos/TransparentBackground/FirejackedFeelTheBurnTransparentBackground1x/White Text.png";
const LoginSplash = () => {
  return (
    <Background>
      <div>
        <Logo>
          <div />
        </Logo>
      </div>
    </Background>
  );
};
export const Background = styled.div`
  background: url(${backgroundPhoto}) no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
`;
export const Logo = styled.div`
  background: url(${logo}) no-repeat;
  background-size: cover;
  position: fixed;
  width: 500px;
  height: 400px;
  
`;
export default LoginSplash;
