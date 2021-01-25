import { useContext, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";
import AllExercises from "../exercises/AllExcercises";
import UserEditForm from "./UserEditForm";
import UserImageForm from "./UserImageForm";

const UserDash = () => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [showImage, setImageShow] = useState(false);

  const handleImageClose = () => setImageShow(false);
  const handleImage = () => setImageShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editImage = () => {};

  const renderUserInfo = () => {
    if (user) {
      return (
        <>
          <Row>
            <Col xs={2}>
              <img src={user.image} style={{ borderRadius: "50%" }} />
              <Button onClick={handleImage}>Update Image</Button>
              <Modal show={showImage} onHide={handleImageClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Update your Picture </Modal.Title>
                </Modal.Header>
                <Modal.Body><UserImageForm /></Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleImageClose}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>

              <div>
                <h4>
                  Name: {user.first_name} {user.last_name}
                </h4>
                <h4>Weight: {user.weight}</h4>
                <h4>Height: {user.height}</h4>
                <h4>Bio: {user.about}</h4>

                <Button variant="primary" onClick={handleShow}>
                  Update User Info
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <UserEditForm hide={handleClose}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Col>
            <Col xs={8}>
              <AllExercises />
            </Col>
            <Col xs={2}>
              <h1> Connected traines function to diplay all of them</h1>
            </Col>
          </Row>
        </>
      );
    }
  };
  return <>{renderUserInfo()}</>;
};
export default UserDash;
