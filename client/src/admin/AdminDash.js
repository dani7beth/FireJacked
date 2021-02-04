import { useContext, useState } from 'react';
import { AuthContext, } from "../providers/AuthProvider"
import {Row, Col, Button, Modal} from "react-bootstrap"
import Exercises from '../exercises/Exercises';
import AdminUpdate from './AdminUpdate';
import AdminUpdateImage from './AdminUpdateImage';
import UsersIndex from "./UsersIndex";
import UserSelection from "./UserSelection";
import AllUserSubmissions from "./AllUserSubmissions";
import { Dashboard, DashboardLeftSideBar, DashboardCenter, DashboardRightSideBar, UserInfoDiv, TrainerInfoDiv } from '../components/Styles';
import { MdEdit } from 'react-icons/md';

const AdminDash = () =>{
  const {admin, updateAdminInfo, updateAdminImage } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [currentDisplayExercises, setCurrentDisplayExercises] = useState(true)
  const handleImageShow = () => setImageShow(true);
  const handleImageHide = () => setImageShow(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const AdminInfo = () => {
    return(
<TrainerInfoDiv>
            <img src={admin.image} style={{ borderRadius: "50%", width: '150px', margin:"auto" }} onClick={handleImageShow} />
              <div style={{marginTop: "20px"}}>
                <h4 style={{textAlign: "center"}}>{admin.first_name} {admin.last_name}</h4>
                <p>{admin.email}</p>
                <p>{admin.phone}</p>
                <p>Speciality: {admin.speciality}</p>
                <MdEdit style={{fontSize:"24px", cursor:"pointer"}} onClick={handleShow}/>
              </div>
</TrainerInfoDiv>

    )
  }

  const renderAdmin = () => {
    if (admin) {
      return (
        <>
          <Dashboard>
            <DashboardLeftSideBar>
              {/* {currentDisplayExercises ? <UsersIndex/> : <UserSelection selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>} */}
              <UsersIndex selectedUser={selectedUser} setSelectedUser={setSelectedUser} setCurrentDisplayExercises={setCurrentDisplayExercises}/>
            </DashboardLeftSideBar>

            <DashboardCenter>
              <Button style={{marginBottom:"10px"}} onClick={() => setCurrentDisplayExercises(!currentDisplayExercises)}>
                {currentDisplayExercises ? 'Display Submissions' : 'Display Exercises'}
              </Button>
              {currentDisplayExercises ? <Exercises /> : <AllUserSubmissions selectedUser={selectedUser}/>}
            </DashboardCenter>

            <DashboardRightSideBar>
              {AdminInfo()}
              </DashboardRightSideBar>
            </Dashboard>


              <Modal show={imageShow} onHide={handleImageHide}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Profile Photo: Drag or drop a photo here</Modal.Title>
                </Modal.Header>
                <Modal.Body><AdminUpdateImage handleImageHide={handleImageHide} updateAdminImage={updateAdminImage} /></Modal.Body>
              </Modal>

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
