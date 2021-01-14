import ExerciseForm from "./ExerciseForm";
import { useState, } from 'react';

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
    <>
      <h1>{exerciseProp.name}</h1>
      { showEditForm && <ExerciseForm editExercise={editExercise} exerciseProp={exerciseProp}/>}
      <button onClick={showEditFormToggle}>{showEditForm ? "Close Form" : "Show Form"}</button>
      <button onClick={()=> deleteExercise(exerciseProp.id)}>Delete</button>
    </>
  )
}
export default Exercise;
