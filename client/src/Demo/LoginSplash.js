import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/jonathan-borba-zfPOelmDc-M-unsplash.jpg";
import logo from "../Logos/TransparentBackground/FirejackedFeelTheBurnTransparentBackground1x/White Text.png";
const LoginSplash = () => {
  return (
    <Background>
      <Logo url={logo}>
        <img src={logo} style={{width: '500px', height: '300px',objectFit: 'cover', objectPosition: '0 -60px'}}/>
        <h3 style={{fontStyle:'italic'}}>SET/TRACK/SUCCEED</h3>
      </Logo>
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
`;
export const Logo = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 4px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  width: 50%;
  height: auto;
  padding: 20px;
`;
export default LoginSplash;
