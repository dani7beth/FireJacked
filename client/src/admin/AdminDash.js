import { useContext } from 'react';
import { AuthContext, } from "../providers/AuthProvider"

const AdminDash = () =>{
  const {admin} = useContext(AuthContext);
  console.log(admin);

  const renderAdmin = () => {
    if (admin) { return (
      <>
        <h1>Welcome {admin.first_name} {admin.last_name}</h1>
        <p>Your email: {admin.email}</p>
        <p>Your phone number: {admin.phone}</p>
        <p>Your speciality: {admin.speciality}</p>
      </>
    )}
  }

  return(
    <>
      {renderAdmin()}
    </>
  )
}
export default AdminDash;
