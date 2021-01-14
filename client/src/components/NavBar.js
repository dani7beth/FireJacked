import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const history = useHistory();
  const { userAuthenticated, adminAuthenticated, handleUserLogout, handleAdminLogout } = useContext(AuthContext);

  const rightNavItems = () => {
    debugger;
    if (userAuthenticated) {
      return (
        <>
          <li name="logout" onClick={() => handleUserLogout(history)}> Logout</li>
        </>
      );
    }
    else if (adminAuthenticated){
      return (
        <li name='logout' onClick={()=> handleAdminLogout(history)}>Logout</li>
      )
    }else {
      return (
        <>
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
        </>
      );
    }
  };
  return (
    <ul style={{margin: 0, padding: 0,listStyleType: "none"}}>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/exercises">
        <li>Exercises</li>
      </Link>
      <ul style={{margin: 0, padding: 0,listStyleType: "none"}}>{rightNavItems()}</ul>
    </ul>
  );
};
