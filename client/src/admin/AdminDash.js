import { useContext, useState } from 'react';
import { AuthContext, } from "../providers/AuthProvider"
import {Row, Col, Button, Modal} from "react-bootstrap"
import Exercises from '../exercises/Exercises';
import AdminForm from './AdminForm';
import AdminUpdateImage from './AdminUpdateImage';


const AdminDash = () =>{
  const {admin} = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleImageShow = () => setImageShow(true);
  const handleImageHide = () => setImageShow(false);

  console.log(admin);


  const updateAdminImage = () => {
    return 'hello'
  }

  const renderAdmin = () => {
    if (admin) {
      return (
        <>
        <Row>
          <Col xs={2}>
          <h1>This is where the Submition Review needs to go</h1>
          </Col>
          <Col xs={8}>
            <Exercises />
          </Col>
          <Col xs={2}>
          <div nClick={handleShow}>
          <h1>Welcome {admin.first_name} {admin.last_name}</h1>
          <p>Your email: {admin.email}</p>
          <p>Your phone number: {admin.phone}</p>
          <p>Your speciality: {admin.speciality}</p>
          <Button onClick={handleShow}>Update Info</Button>
          </div>
          <Button variant='secondary' onClick={handleImageShow}>Update picture</Button>

          <Modal show={imageShow} onHide={handleImageHide}>
            <Modal.Header closeButton>
              <Modal.Title>Update Trainer Information</Modal.Title>
            </Modal.Header>
            <Modal.Body><AdminUpdateImage handleImageHide={handleImageHide} /></Modal.Body>
          </Modal>

          <Modal show={show} onHide={handleHide}>
            <Modal.Header closeButton>
              <Modal.Title>Update Trainer Information</Modal.Title>
            </Modal.Header>
            <Modal.Body><AdminForm handleHide={handleHide} /></Modal.Body>
          </Modal>
          </Col>
          </Row>
        </>
      )
    }
  }

  return (
    <>
      {renderAdmin()}
    </>
  )
}
export default AdminDash;
