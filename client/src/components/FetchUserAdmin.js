import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const FetchUserAdmin = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { userAuthenticated, setUser } = useContext(AuthContext);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    if (userAuthenticated || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;
    }
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
  return loaded ? props.children : null;
};
export default FetchUserAdmin;
