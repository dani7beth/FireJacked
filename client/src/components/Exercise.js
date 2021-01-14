import Axios from "axios";
import ExerciseForm from "./ExerciseForm";
import { useState, } from 'react';

const Exercise = ({ exerciseProp , exercisesProp}) => {
  // const [ exercise, setExercise] = useState()
  const [ showEditForm, setShowEditForm] = useState(false)

  // const editExercise = (res) => {
  //   const newExercise = res;
  //   if(newExercise == exerciseProp.id) return setExercise(newExercise)
  //   else return exerciseProp
  // }

  const showEditFormToggle = () => {
    setShowEditForm(!showEditForm)
  }

  const deleteExercise = () => {
    Axios.delete(`/api/exercises/${exerciseProp.id}`)
      .then((res) => {
        exercisesProp.filter((exercise) => exercise.id !== exerciseProp.id)
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error in delete exercise");
      })
  }

 
  return (
    <>
      <h1>{exerciseProp.name}</h1>
      { showEditForm && <ExerciseForm exerciseProp={exerciseProp}/>}
      <button onClick={showEditFormToggle}>{showEditForm ? "Close Form" : "Show Form"}</button>
      <button onClick={()=> deleteExercise()}>Delete</button>
    </>
  )
}
export default Exercise;