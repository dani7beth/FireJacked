import { useContext, useState } from "react";
import { Row, Col, Modal, Button, Alert } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";
import AllExercises from "../exercises/AllExcercises";
import UserEditForm from "./UserEditForm";
import UserImageForm from "./UserImageForm";
import TrainerIndex from "./TrainerIndex";
import { UserInfoDiv, Dashboard, DashboardCenter, DashboardRightSideBar, DashboardLeftSideBar } from "../components/Styles";
import { MdEdit } from "react-icons/md";

const UserDash = () => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [showImage, setImageShow] = useState(false);

  const handleImageClose = () => setImageShow(false);
  const handleImage = () => setImageShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userInfo = () => {
    return(
    <UserInfoDiv> 
      <img src={user.image} onClick={handleImage} style={{ borderRadius: "50%", width: '150px', margin:"auto" }} />
      <br></br>
      <div>
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <h4>Weight: {user.weight} lbs</h4>
        <h4>Height: {user.height}"</h4>
        <p>Bio: {user.about}</p>
        <MdEdit variant="primary" onClick={handleShow} style={{fontSize:"24px"}}/>
      </div>
    </UserInfoDiv>
    )
  }

  
  const renderUserInfo = () => {
    if (user) {
      return (
        <>
        {(user.first_name == null || user.last_name == null || user.height == null || user.weight == null || user.age == null) ?
            <Alert variant='danger'>Fill out information</Alert> : ''}
          <Dashboard>
            <DashboardLeftSideBar>
              {userInfo()}
            </DashboardLeftSideBar>
            <DashboardCenter>
              <AllExercises />
            </DashboardCenter>
            <DashboardRightSideBar>
              <TrainerIndex />
            </DashboardRightSideBar>
          </Dashboard>


          <Modal show={showImage} onHide={handleImageClose}>
            <Modal.Header closeButton>
              <Modal.Title> Update your Picture </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserImageForm handleImageHide={handleImageClose} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleImageClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Edit </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserEditForm hide={handleClose} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  };
  return <>{renderUserInfo()}</>;
};
export default UserDash;