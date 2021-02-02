import "./App.css";
import NavBar from "./components/NavBar";
import FetchUserAdmin from "./components/FetchUserAdmin";
import UserLogin from "./user/UserLogin";
import AdminLogin from "./admin/AdminLogin";
import NoMatch from './components/NoMatch';
import AdminDash from "./admin/AdminDash";
import UserDash from "./user/UserDash";
import ExerciseForm from './exercises/ExerciseForm';
import { Route, Switch } from "react-router-dom";
import Exercises from "./exercises/Exercises"
import AllExercises from "./exercises/AllExcercises";
import ShowExercise from './exercises/ShowExercise';
import Submissions from './submissions/Submissions'
import Levels from './components/Levels';
import SubmissionsAdmin from "./submissions/SubmissionsAdmin";
import SubmissionsFormAdmin from "./submissions/SubmissionsFormAdmin";
import UserRegister from "./user/UserRegister";
import AdminRegister from "./admin/AdminRegister";
import UserStats from "./components/UserStats";
import UserEditForm from "./user/UserEditForm";
import ShowExerciseAdmin from "./exercises/ShowExerciseAdmin";
import { Container } from "./components/Styles";
import Trainer from "./user/Trainer";
import UserSubmissions from "./admin/UserSubmissions";
import SeeHistory from "./components/SeeHistory";
import LoginSplash from "./Demo/LoginSplash";

function App() {

  return (
    <div className='App'>
      <FetchUserAdmin>
      <NavBar />
        <Switch>
          <Route exact path ='/' component={LoginSplash} />
          <Route exact path='/login' component={UserLogin} />
          <Route exact path='/user_register' component={UserRegister} />
          <Route exact path='/admin_login' component={AdminLogin} />
          <Route exact path="/admin_dash/" component={AdminDash} />
          <Route exact path="/exercises" component={Exercises} />
          <Route exact path="/add_exercise" component={ExerciseForm} />
          <Route exact path="/all_exercises" component={AllExercises} />
          <Route exact path="/showexercise/:exercise_id" component={ShowExercise} />
          <Route exact path="/:exercise_id/user_see_history/:level_id" component={SeeHistory} />
          <Route exact path="/submissions/:level_id" component={Submissions} />
          <Route exact path="/user_dash" component={UserDash} />
          <Route exact path='/edit_profile' component={UserEditForm} />
          <Route exact path='/exercise/:id/levels' component={Levels} />
          <Route exact path='/admin-submissions' component={SubmissionsAdmin}/>
          <Route exact path='/admin-submissions/:submission_id' component={SubmissionsFormAdmin}/>
          <Route exact path='/admin_register' component={AdminRegister}/>
          <Route exact path='/user_stats' component={UserStats}/>
          <Route exact path="/show-exercises-for-admin/:exercise_id" component={ShowExerciseAdmin} />
          <Route exact path="/show_admin/:admin_id" component={Trainer} />
          <Route exact path="/show_user_submissions/:user_id" component={UserSubmissions} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUserAdmin>
    </div>
  );
}

export default App;

