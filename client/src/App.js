import "./App.css";
import NavBar from "./components/NavBar";
import FetchUserAdmin from "./components/FetchUserAdmin";
import UserApp from "./user/UserApp";
import AdminApp from "./user/UserApp";
import LoginSplash from "./Demo/LoginSplash";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import UserLogin from "./user/UserLogin";
import AdminLogin from "./admin/AdminLogin";
import NoMatch from './components/NoMatch';
import AdminDash from "./admin/AdminDash";
import ExerciseForm from "./components/ExerciseForm"
import UserDash from "./user/UserDash";
import { Route, Switch } from "react-router-dom";
import Exercises from "./components/Exercises"
import AllExercises from "./components/AllExcercises";
import ShowExercise from "./components/ShowExercise";
import SubmissionForm from "./components/SubmissionForm";
import Submissions from "./components/Submissions";
import Levels from './components/Levels';
import SubmissionsAdmin from "./components/SubmissionsAdmin";
import SubmissionsFormAdmin from "./components/SubmissionsFormAdmin";
import AdminRegister from "./components/AdminRegister";

function App() {
  // const { user, admin } = useContext(AuthContext);

  // const getApp = () => {
  //   if (user) {
  //     return <UserApp />;
  //   }
  //   if (admin) {
  //     return <AdminApp />;
  //   } else {
  //     return <LoginSplash />;
  //   }
  // };

  return (
    <>
      <NavBar />
      <FetchUserAdmin>
        <Switch>
          <Route exact path='/' component={UserLogin} />
          <Route exact path='/login' component={UserLogin} />
          <Route exact path='/admin_login' component={AdminLogin} />
          <Route exact path="/admin_dash/" component={AdminDash} />
          <Route exact path="/exercises" component={Exercises} />
          <Route exact path="/add_exercise" component={ExerciseForm} />
          <Route exact path="/all_exercises" component={AllExercises} />
          <Route exact path="/showexercise/:exercise_id" component={ShowExercise} />
          <Route exact path="/submissions/:level_id" component={Submissions} />
          <Route exact path="/user_dash" component={UserDash} />
          <Route exact path='/exercise/:id/levels' component={Levels} />
          <Route exact path='/admin-submissions' component={SubmissionsAdmin}/>
          <Route exact path='/admin-submissions/:submission_id' component={SubmissionsFormAdmin}/>
          <Route exact path='/admin_register' component={AdminRegister}/>
        
          <Route component={NoMatch} />
        </Switch>
      </FetchUserAdmin>
    </>
  );
}

export default App;

