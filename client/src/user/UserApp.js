
import {Route, Switch} from "react-router-dom";
import UserDash from "./UserDash";
import UserNoMatch from "./UserNoMatch";
import UserLogin from './UserLogin';

const UserApp = () => {
  return (
    <>
    <Switch>
      <Route exact path="/user_dash" component={UserDash} />
      <Route exact path='/login' component={UserLogin} />
      <Route component={UserNoMatch} />
    </Switch>
    </>
  );
};
export default UserApp;
