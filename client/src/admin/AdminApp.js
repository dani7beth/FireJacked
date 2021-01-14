import AdminDash from "./AdminDash";
import Route from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminNoMatch from "./AdminNoMatch";
import ExerciseForm from '../components/ExerciseForm';

const AdminApp = () => {
  return (
    <Switch>
      <Route exact path="/admin_dash" component={AdminDash} />
      <Route exact path='/admin_login' component={AdminLogin} />
      <Route exact path='/add_exercise' component={ExerciseForm} />
      <Route path={AdminNoMatch} />
    </Switch>
  );
};
export default AdminApp;
