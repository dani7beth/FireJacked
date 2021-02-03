import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/jonathan-borba-zfPOelmDc-M-unsplash.jpg";

const UserLogin = (props) => {
  //init email and password for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456");
  //call the handlelogin function
  const { handleUserLogin } = useContext(AuthContext);

  //handle form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserLogin({ email, password }, props.history);
  };

  return (
    <Background>
      <StyledContainer>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <StyledButton type="submit">login</StyledButton>
          </div>
        </Form>
      </StyledContainer>
    </Background>
  );
};
export default UserLogin;
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
`;
export const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  border: 4px solid rgba(255, 255, 255, 0.9);
  color: #ffffff;
  width: 500px;
  height: auto;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StyledButton = styled(Button)`
  background-color: #febd4a;
  border-color: #febd4a;
  margin-top: 15px;
  width: 100px;
  &:hover {
    background-color: #fab232;
    border-color: #fab232;
  }
`;
