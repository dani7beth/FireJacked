import { useContext, useState } from 'react';
import { AuthContext, } from "../providers/AuthProvider"
import {Row, Col, Button, Modal} from "react-bootstrap"
import Exercises from '../exercises/Exercises';
import AdminForm from './AdminForm';
import AdminUpdateImage from './AdminUpdateImage';
import axios from 'axios';

const AdminDash = () =>{
  const {admin} = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleImageShow = () => setImageShow(true);
  const handleImageHide = () => setImageShow(false);
        // pass close as a prop

  console.log(admin);

  const updateAdminImage = () => {
    return 'hello'
  }

  const renderAdmin = () => {
    if (admin) {
      return (
        <>
          <Row >
            <Col>
              <div>
                <Button variant="primary" onClick={handleShow}>
                  Update Admin Information
                </Button>
                <Modal show={show} onHide={handleHide} >
                  <Modal.Header closeButton>
                    <Modal.Title>Change Admin Info Here</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><AdminForm handleHide={handleHide} /></Modal.Body>
                </Modal>
                <br />
                <img src={admin.image} onClick={handleImageShow} alt='Admin Image' />
                <Modal show={imageShow} onHide={handleImageHide}>
                  <Modal.Header closeButton>
                    <Modal.Title>Drag or drop a photo here</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><AdminUpdateImage handleImageHide={handleImageHide} editAdminImage={updateAdminImage} /></Modal.Body>
                </Modal>
                <h1>Welcome {admin.first_name} {admin.last_name}</h1>
                <p>Your email: {admin.email}</p>
                <p>Your phone number: {admin.phone}</p>
                <p>Your speciality: {admin.speciality}</p>
              </div>
            </Col>
            <Col>
              <Exercises />
            </Col>
            <Col>
              <h1>connnected users</h1>
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
