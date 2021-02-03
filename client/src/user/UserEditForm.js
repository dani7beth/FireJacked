import React,{useState,useContext} from 'react'
import { Form, Button, Col } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";

const UserEditForm = ({ hide }) => {
  const { user, handleUserEdit } = useContext(AuthContext);
  const [userState, setUserState] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserEdit(userState);
    hide();
  };

  const handleChange = (e) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="first_name"
            type="text"
            value={userState.first_name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="last_name"
            type="text"
            value={userState.last_name}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group>
        <Form.Label>About</Form.Label>
        <Form.Control
          name="about"
          as="textarea"
          value={userState.about}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Age</Form.Label>
          <Form.Control
            name="age"
            type="number"
            value={userState.age}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as='select'
            name="gender"
            type="text"
            value={userState.gender}
            onChange={handleChange}
          >
            <option>Choose a gender...</option>
            <option>Male</option>
            <option>Female</option>
            <option>I do not want to disclose</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Label>Height</Form.Label>
      <Form.Control
        name="height"
        type="number"
        value={userState.height}
        onChange={handleChange}
      />
      <Form.Label>Weight</Form.Label>
      <Form.Control
        name="weight"
        type="number"
        value={userState.weight}
        onChange={handleChange}
      />
      <br></br>
      <Button type="submit"> Submit </Button>
    </Form>
  );
};
export default UserEditForm;
