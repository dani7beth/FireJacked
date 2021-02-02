import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/jonathan-borba-zfPOelmDc-M-unsplash.jpg";
const LoginSplash = () => {
  return (
    <>
      <Background></Background>
    </>
  );
};
export const Background = styled.div`
  background-image: url(${backgroundPhoto});
  background-size: cover;
  width: 1080px;
  height: 1920px;
`;
export default LoginSplash;
