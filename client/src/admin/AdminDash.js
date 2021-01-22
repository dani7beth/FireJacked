import React,{ useContext, useState } from 'react';
import { AuthContext, } from "../providers/AuthProvider"
import { Link } from 'react-router-dom';
import {Row, Col,Modal,Button} from 'react-bootstrap'
import Exercises from '../exercises/Exercises'
import AdminUpdate from './AdminUpdate'
const AdminDash = () =>{
  const {admin} = useContext(AuthContext);
  console.log(admin);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Trainer Information</Modal.Title>
        </Modal.Header>
        <Modal.Body><AdminUpdate /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
          </Col>
          </Row>
        </>
      )
    }
  }

  return(
    <>
      {renderAdmin()}
    </>
  )
}
export default AdminDash;
