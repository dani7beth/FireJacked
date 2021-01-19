import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const history = useHistory();
  const { userAuthenticated, adminAuthenticated, handleUserLogout, handleAdminLogout } = useContext(AuthContext);


  const userNavBar = () => {
    return (
      <>
      <li name="logout" onClick={() => handleUserLogout(history)}> Logout</li>
      <Link to="/all_exercises">
        <li>All Exercises</li>
      </Link>
      </>
    )
  }

  const adminNavBar = () => {
    return (
      <>
      
      <Link to="/admin-submissions">
        <li>Admin submissions</li>
      </Link>
      <Link to="/exercises">
        <li>Exercises</li>
      </Link>
      <li name='logout' onClick={()=> handleAdminLogout(history)}>Logout</li>
      </>
    )
  }

  const noLogin = () => {
    return (
      <ul style={{margin: 0, padding: 0,listStyleType: "none"}}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li id="login" name="login">
            Login
          </li>
        </Link>
        <Link to="/register">
          <li id="Register" name="register">
            Register
          </li>
        </Link> 
        <Link to="/admin_register">
          <li id="AdminRegister" name="adminRegister">
            Admin Register
          </li>
        </Link> 
      </ul>
  );
};


if (userAuthenticated){
  return userNavBar()
}
if (adminAuthenticated){
  return adminNavBar()
}
return noLogin()

}
