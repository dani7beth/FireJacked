import { useContext, } from 'react';
import { AuthContext, } from "../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

const UpdateAdmin = () => {
  const {admin, setAdmin} = useContext(AuthContext);
//   const [adminInfo, setAdminInfo] = useState(
//     {
//       first_name: {admin.first_name},
//       last_name: {admin.last_name},
//       email: {admin.last_name},
//       phone: {admin.phone},
//       speciality: {admin.speciality},
//       image: {admin.image},
//     }
//   );
// 
  const editAdmin = () => {
    axios
      .put(`/api/admin_auth/`, admin)
      .then((res) => {
        setAdmin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setAdmin({...admin, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    editAdmin();
  }
 
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name='first_name'
            type='text'
            value={admin.first_name}
            onChange={handleChange}/>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name='last_name'
            type='text'
            value={admin.last_name}
            onChange={handleChange}/>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type='text'
            value={admin.email}
            onChange={handleChange}/>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name='phone'
            type='text'
            value={admin.phone}
            onChange={handleChange}/>
          <Form.Label>Speciality</Form.Label>
          <Form.Control
            name='speciality'
            type='text'
            value={admin.speciality}
            onChange={handleChange}/>
          <Form.Label>Image</Form.Label>
          <Form.Control
            name='image'
            type='text'
            value={admin.image}
            onChange={handleChange}/>
        </Form.Group>
        <Button variant='primary' type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default UpdateAdmin;
