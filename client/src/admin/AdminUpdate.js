import { useContext, useState, } from 'react';
import { AuthContext, } from "../providers/AuthProvider";
import { Form, Button, Col } from "react-bootstrap";

const UpdateAdmin = ({handleClose}) => {
  const {admin, updateAdminInfo} = useContext(AuthContext);
  const [adminInfo, setAdminInfo] = useState(admin)

  const handleChange = (e) => {
    setAdminInfo({...adminInfo, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAdminInfo(adminInfo);
    handleClose();
  }
 
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first_name"
              type="text"
              value={adminInfo.first_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last_name"
              type="text"
              value={adminInfo.last_name}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="text"
          value={adminInfo.email}
          onChange={handleChange}
        />
        <Form.Label>Phone</Form.Label>
        <Form.Control
          name="phone"
          type="text"
          value={adminInfo.phone}
          onChange={handleChange}
        />
        <Form.Label>Speciality</Form.Label>
        <Form.Control
          name="speciality"
          type="text"
          value={adminInfo.speciality}
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default UpdateAdmin;
