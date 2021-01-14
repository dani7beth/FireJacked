import ExerciseForm from "./ExerciseForm";
import { useState, } from 'react';
import Levels from "./Levels";
import { Link } from 'reactor-router-dom'

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
    <div link_to='/levels'>
        <h1>{exerciseProp.name}</h1>
        { showEditForm && <ExerciseForm showEditFormToggle={showEditFormToggle} editExercise={editExercise} exerciseProp={exerciseProp}/>}
        <button onClick={showEditFormToggle}>{showEditForm ? "Close Form" : "Show Form"}</button>
        <button onClick={()=> deleteExercise(exerciseProp.id)}>Delete</button>
        {/* <Levels exercise={exercise}/> */}
    </div>
  )
}
export default Exercise;
