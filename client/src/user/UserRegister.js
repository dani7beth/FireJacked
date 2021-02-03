import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg";

export default (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    image:
      "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",
  });

  const { handleRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      handleRegister(user, props.history);
    } else {
      alert("passwords dont match");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Background>
      <StyledContainer>
      <h1 as="h1" style={{paddingBottom: '10px'}}>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmPassword"
            type="password"
            value={user.confirmPassword}
            onChange={handleChange}
          />
          <StyledButton variant="primary" type="submit">
            Register
          </StyledButton>
        </Form.Group>
      </Form>
      </StyledContainer>
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
`;
export const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  border: 4px solid rgba(255, 255, 255, 0.9);
  color: #ffffff;
  width: 600px;
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
  margin-top: 20px;
  width: 100px;
  &:hover {
    background-color: #f2670c;
    border-color: #f2670c;
  }
`;
