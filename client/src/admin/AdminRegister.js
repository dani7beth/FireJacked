import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundPhoto from "../Photos : Images/scott-webb-_PdZdW7fiDc-unsplash.jpg";
import {YellowButton} from '../components/Styles';

export default (props) => {
  //init register values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState("");

  const { handleAdminRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      handleAdminRegister(
        { email, firstName, lastName, phone, speciality, password },
        props.history
      );
    } else {
      alert("passwords dont match");
    }
  };

  return (
    <Background>
      <StyledContainer>
        <h1 as="h1">Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group style={{width:'300px'}}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Form.Label>Speciality</Form.Label>
            <Form.Control
              placeholder="e.g. Crossfit, Weightlifting, Yoga, etc."
              type="text"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <YellowButton type="submit" style={{marginTop: '20px'}}>
              Register Trainer
            </YellowButton>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  border: 4px solid rgba(255, 255, 255, 0.9);
  color: #ffffff;
  width: 800px;
  height: auto;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
