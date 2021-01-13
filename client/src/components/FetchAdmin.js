import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const FetchAdmin = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { adminAuthenticated, setAdmin } = useContext(AuthContext);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    if (adminAuthenticated || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;
    }
    try {
      const res = await Axios.get("/api/admin_auth/validate_token");
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
export default FetchAdmin;