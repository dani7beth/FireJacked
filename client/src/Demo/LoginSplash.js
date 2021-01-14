import { Route, Switch } from "react-router-dom"
import AdminLogin from "../admin/AdminLogin"
import UserLogin from "../user/UserLogin"
import NoMatch from '../components/NoMatch';

const LoginSplash = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={UserLogin} />
        <Route exact path='/login' component={UserLogin} />
        <Route exact path='/admin_login' component={AdminLogin} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};
export default LoginSplash;