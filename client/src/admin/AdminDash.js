import { useContext, useState } from 'react';
import { AuthContext, } from "../providers/AuthProvider"
import {Row, Col, Button, Modal} from "react-bootstrap"
import Exercises from '../exercises/Exercises';
import AdminUpdate from './AdminUpdate';
import AdminUpdateImage from './AdminUpdateImage';
import UsersIndex from "./UsersIndex";
import UserSelection from "./UserSelection";
import AllUserSubmissions from "./AllUserSubmissions";

const AdminDash = () =>{
  const {admin, updateAdminInfo, updateAdminImage } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [currentDisplayExercises, setCurrentDisplayExercises] = useState(false)
  const handleImageShow = () => setImageShow(true);
  const handleImageHide = () => setImageShow(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderAdmin = () => {
    if (admin) {
      return (
        <>
          <Row>
            <Col xs={2}>
              {/*<UsersIndex/>*/}
              <UserSelection selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            </Col>
            <Col xs={8}>
              <Button onClick={() => setCurrentDisplayExercises(!currentDisplayExercises)}>
                {currentDisplayExercises ? 'Display Submissions' : 'Display Exercises'}
              </Button>
              {currentDisplayExercises? <Exercises /> : <AllUserSubmissions selectedUser={selectedUser}/>}
            </Col>
            <Col xs={2}>
              <img src={admin.image} style={{ borderRadius: "50%", width: '200px' }} />
              <Button onClick={handleImageShow}>Update Image</Button>
              <Modal show={imageShow} onHide={handleImageHide}>
                <Modal.Header closeButton>
                  <Modal.Title>Drag or drop a photo here</Modal.Title>
                </Modal.Header>
                <Modal.Body><AdminUpdateImage handleImageHide={handleImageHide} updateAdminImage={updateAdminImage} /></Modal.Body>
              </Modal>
              <div>
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
                <Modal.Body><AdminUpdate handleClose={handleClose} updateAdminInfo={updateAdminInfo} /></Modal.Body>
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

return (
  <>
    {renderAdmin()}
  </>
)
}
export default AdminDash;
