import ExerciseForm from "./ExerciseForm";
import { useState, } from 'react';
import Levels from "./Levels";
import {Link} from 'react-router-dom';

const Exercise = ({ exerciseProp, deleteExercise}) => {
  const [ exercise, setExercise] = useState()
  const [ showEditForm, setShowEditForm] = useState(false)

  const editExercise = (res) => {
    const newExercise = res;
    if(newExercise === exerciseProp.id) return setExercise(newExercise)
    else return exerciseProp
  }

  const showEditFormToggle = () => {
    setShowEditForm(!showEditForm)
  }
 
  return (
    <div>
        <Link to={`/exercise/${exerciseProp.id}/levels`}><h1>{exerciseProp.name}</h1></Link>
        <img src={exerciseProp.image} />
        { showEditForm && <ExerciseForm showEditFormToggle={showEditFormToggle} editExercise={editExercise} exerciseProp={exerciseProp}/>}
        <button onClick={showEditFormToggle}>{showEditForm ? "Close Form" : "Show Form"}</button>
        <button onClick={()=> deleteExercise(exerciseProp.id)}>Delete</button>
        {/* <Levels exercise={exerciseProp}/> */}
    </div>
  )
}
export default Exercise;
