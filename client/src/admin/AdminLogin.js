import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg";


const AdminLogin = (props) => {
  const { handleAdminLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdminLogin({ email, password }, props.history);
  };
  return (
    <Background>
      <StyledContainer>
      <h1>Admin Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <StyledButton type="submit">login</StyledButton>
        </div>
      </Form>
      </StyledContainer>
      <StyledButton2 href="/admin_register">Register</StyledButton2>
    </Background>
  );
};
export default AdminLogin;
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
  flex-direction: column;
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
export const StyledButton2 = styled(Button)`
  background-color: #f4731f;
  border-color: #f4731f;
  margin-top: 15px;
  width: 100px;
  &:hover {
    background-color: #f2670c;
    border-color: #f2670c;
  }
`;