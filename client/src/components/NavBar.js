import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const history = useHistory();
  const {
    userAuthenticated,
    adminAuthenticated,
    handleUserLogout,
    handleAdminLogout,
  } = useContext(AuthContext);

  const userNavBar = () => {
    return (
      <>
        <li name="logout" onClick={() => handleUserLogout(history)}>
          {" "}
          Logout
        </li>
        <Link to="/user_dash">
          <li>User Dashboard</li>
        </Link>
        <Link to="/user_stats">
          <li>User Stats</li>
        </Link>
      </>
    );
  };

  const adminNavBar = () => {
    return (
      <>
        <Link to="/admin-submissions">
          <li>User Submissions</li>
        </Link>
        <Link to="/admin_dash/">
          <li>Admin Dashboard</li>
        </Link>
        <li name="logout" onClick={() => handleAdminLogout(history)}>
          Logout
        </li>
      </>
    );
  };

  const noLogin = () => {
    return (
      <ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li id="login" name="login">
            Login
          </li>
        </Link>
        <Link to="/user_register">
          <li>Register</li>
        </Link>
        <Link to="/admin_register">
          <li id="AdminRegister" name="adminRegister">
            Admin Register
          </li>
        </Link> 
      </ul>
    );
  };

  if (userAuthenticated) {
    return userNavBar();
  }
  if (adminAuthenticated) {
    return adminNavBar();
  }
  return noLogin();
};
