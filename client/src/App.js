import "./App.css";
import NavBar from "./components/NavBar";
import FetchUserAdmin from "./components/FetchUserAdmin";
import UserApp from './user/UserApp';
import AdminApp from "./user/UserApp";
import LoginSplash from "./Demo/LoginSplash";

function App() {

  const getApp = () =>{
    if(user) {
      return <UserApp />
    }
    if(admin) {
      return <AdminApp />
    }
    else{
     return <LoginSplash />
    }
  }
  
  return (
    <>
      <NavBar />
      <FetchUserAdmin>
        {getApp()}
      </FetchUserAdmin>
    </>
  );
}

export default App;
