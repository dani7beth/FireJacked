import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";

export default (props) => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { handleRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = (e) => {
    
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
    <>
      <h1 as="h1">Register</h1>
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
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
