import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Demo/Home";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import Exercises from "./components/Exercises";

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/exercises" component={Exercises} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </>
  );
}

export default App;
