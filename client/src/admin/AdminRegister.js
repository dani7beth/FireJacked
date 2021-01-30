import { Form, Button, } from 'react-bootstrap';
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from 'react-router-dom';

export default (props) => {
  //init register values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [speciality, setSpeciality] = useState('');

  const { handleAdminRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      handleAdminRegister({ email, firstName, lastName, phone, speciality, password }, props.history);
    }else{
      alert("passwords dont match");
    }
  };

  return (
    <>
      <Link to='/admin_login'>Login</Link>
      <h1 as="h1">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
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
            placeholder='e.g. Crossfit, Weightlifting, Yoga, etc.'
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
          <Button variant='primary' type="submit">Register</Button>
        </Form.Group>
      </Form>
    </>
  );
};
