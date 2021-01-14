import "./App.css";
import NavBar from "./components/NavBar";
import FetchUserAdmin from "./components/FetchUserAdmin";
import UserApp from "./user/UserApp";
import AdminApp from "./user/UserApp";
import LoginSplash from "./Demo/LoginSplash";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

function App() {
  const { user, admin } = useContext(AuthContext);

  const getApp = () => {
    if (user) {
      return <UserApp />;
    }
    if (admin) {
      return <AdminApp />;
    } else {
      return <LoginSplash />;
    }
  };

  return (
    <>
      <FetchUserAdmin>
        <NavBar />

        {getApp()}
      </FetchUserAdmin>
    </>
  );
}

export default App;
