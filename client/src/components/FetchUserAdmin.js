import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const FetchUserAdmin = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { userAuthenticated, setUser, adminAuthenticated, setAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (userAuthenticated || adminAuthenticated || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;}
    if (localStorage.getItem('member-type') == 'admin'){
      checkAdmin();}
    if (localStorage.getItem('member-type') == 'user'){
      checkUser()
    }
  }, []);

  const checkUser = async () => {
 
    try {
      const res = await Axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      console.log(err.response);
      console.log("invalid token");
    } finally {
      setLoaded(true);
    }
  };

  const checkAdmin = async () => {
 
    try {
      const res = await Axios.get("/api/admin_auth/validate_token");
      setAdmin(res.data.data);
    } catch (err) {
      console.log(err.response);
      console.log("invalid token");
    } finally {
      setLoaded(true);
    }
  };
  return loaded ? props.children : null;
};
export default FetchUserAdmin;