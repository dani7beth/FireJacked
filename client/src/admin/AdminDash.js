import { useContext } from 'react';
import { AuthContext, } from "../providers/AuthProvider"
import {Row, Col} from "react-bootstrap"
import { Link } from 'react-router-dom';
import Exercises from '../exercises/Exercises';

const AdminDash = () =>{
  const {admin} = useContext(AuthContext);
  console.log(admin);

  const renderAdmin = () => {
    if (admin) {
      return (
       <>
        <Row >
          <Col>
            <Link to={"/admin_update/"}>Update Info</Link>
            <h1>Welcome {admin.first_name} {admin.last_name}</h1>
            <p>Your email: {admin.email}</p>
            <p>Your phone number: {admin.phone}</p>
            <p>Your speciality: {admin.speciality}</p>
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

  return(
    <>
      {renderAdmin()}
    </>
  )
}
export default AdminDash;
