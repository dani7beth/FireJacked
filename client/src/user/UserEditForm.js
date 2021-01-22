import React,{useState,useContext} from 'react'
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";

const UserEditForm = ({hide}) => {
  const { user,handleUserEdit } = useContext(AuthContext);
  const [userState,setUserState] = useState(user)
  


  const handleSubmit = (e) => {
      e.preventDefault();
      handleUserEdit(userState);
      hide();
  }
  

  const handleChange = (e) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  return (
    <Form
    onSubmit={handleSubmit}
    >
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="first_name"
          type="text"
          value={userState.first_name}
          onChange={handleChange}
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="last_name"
          type="text"
          value={userState.last_name}
          onChange={handleChange}
        />
        <Form.Label>About</Form.Label>
        <Form.Control
          name="about"
          type="text"
          value={userState.about}
          onChange={handleChange}
        />
        <Form.Label>Age</Form.Label>
        <Form.Control
          name="age"
          type="number"
          value={userState.age}
          onChange={handleChange}
        />
        <Form.Label>Gender</Form.Label>
        <Form.Control
          name="gender"
          type="text"
          value={userState.gender}
          onChange={handleChange}
        />
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
        <Button type='submit' >Edit</Button>
      </Form.Group>
    </Form>
  );
};
export default UserEditForm;
