import { useContext } from 'react';
import { AuthContext, } from "../providers/AuthProvider"
import { Link } from 'react-router-dom';

const AdminDash = () =>{
  const {admin} = useContext(AuthContext);
  console.log(admin);

  const renderAdmin = () => {
    if (admin) {
      return (
        <>
          <Link to={"/admin_update/"}>Update Info</Link>
          <h1>Welcome {admin.first_name} {admin.last_name}</h1>
          <p>Your email: {admin.email}</p>
          <p>Your phone number: {admin.phone}</p>
          <p>Your speciality: {admin.speciality}</p>
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
