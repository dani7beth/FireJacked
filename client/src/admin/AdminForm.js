import { useState, useContext } from 'react';
import { AuthContext} from '../providers/AuthProvider';
import { Button, Form } from 'react-bootstrap';

const AdminForm = ({handleHide}) => {
  const { admin, updateAdminInfo, } = useContext(AuthContext)
  const [adminInfo, setAdminInfo] = useState(admin)

  const handleChange = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateAdminInfo(adminInfo)
    handleHide();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name='first_name'
            type='text'
            value={adminInfo.first_name}
            onChange={handleChange}/>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name='last_name'
            type='text'
            value={adminInfo.last_name}
            onChange={handleChange}/>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type='text'
            value={adminInfo.email}
            onChange={handleChange}/>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name='phone'
            type='text'
            value={adminInfo.phone}
            onChange={handleChange}/>
          <Form.Label>Speciality</Form.Label>
          <Form.Control
            placeholder='e.g. Crossfit, Weightlifting, etc.'
            name='speciality'
            type='text'
            value={adminInfo.speciality}
            onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' type="submit">Submit</Button>
        <Button variant='danger' onClick={handleHide}>Cancel</Button>
      </Form>
      {/* <h1>Update Admin info</h1>
      <h1>Welcome {admin.first_name} {admin.last_name}</h1>
      <p>Your email: {admin.email}</p>
      <p>Your phone number: {admin.phone}</p>
      <p>Your speciality: {admin.speciality}</p> */}
    </>
  )
}

export default AdminForm;