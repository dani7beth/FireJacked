
import Route from "react-router-dom";
import UserDash from "./UserDash";
import UserNoMatch from "./UserNoMatch";
import UserLogin from './UserLogin';

const AdminApp = () => {
  return (
    <Switch>
      <Route exact path="/user_dash" component={UserDash} />
      <Route exact path='/user_login' component={UserLogin} />
      <Route path={UserNoMatch} />
    </Switch>
  );
};
export default AdminApp;
