import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Demo/Home";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import FetchAdmin from './components/FetchAdmin'
import Exercises from "./components/Exercises";
import AdminDash from "./components/AdminDash";

function App() {
  return (
    <>
      <NavBar />
      <FetchAdmin>
      <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path='/admin_dash' component={AdminDash} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/exercises" component={Exercises} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
      </FetchAdmin>
    </>
  );
}

export default App;
