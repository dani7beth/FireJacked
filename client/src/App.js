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
import Levels from './components/Levels';

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
          <Route exact path="/admin_dash" component={AdminDash} />
          <Route exact path="/exercises" component={Exercises} />
          <Route exact path="/add_exercise" component={ExerciseForm} />
          <Route exact path="/user_dash" component={UserDash} />
          <Route exact path='/exercise/:id/levels' component={Levels} />
          {/* <Route exact path="/exercise" component={ShowExercise} /> */}
          
          <Route component={NoMatch} />
        </Switch>
      </FetchUserAdmin>
    </>
  );
}

export default App;


{/* 
      sign-in ..  here is where we get the user_id
      the user clicks on exercises, and it goes to /api/all_exercises
      each exercise will be like a card -- a link to that specific exercise's show page.
      In that page (maybe a seperate component/page called 'showExercise')
      in that page by default you'll have THAT exercise's ID. Then you'll click on a level
      which takes you to THAT level's show page, from that page, you can do your next api call to submissions for THAT level
      and THEN finally when you click on "submit" that'll automagically take you to THAT level's submission form. 

      which, through this path, I think it alleviates the need to pass down any id's


      maybe a more accurate name for Exercise.js is ExerciseIndex.js.  Then for we can make an ExerciseShow.js  component, which is
      where'd you go when you click on an individual exercise.

*/}

