import { useEffect, useState } from "react";
import axios from "axios";
import Exercise from './Exercise'
import ExerciseForm from './ExerciseForm';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  const getExercises = () => {
    axios
      .get("/api/exercises")
      .then((response) => {
        console.log(response.data);
        setExercises(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    // const addExercise = () => {
    //     console.log('hello')
    //   }

  useEffect(() => {
    getExercises();
  }, []);

  const renderExercises = () => {
    return exercises.map((exercise) => (
      <Exercise key={exercise.id} exerciseProp={exercise} />
    ))
  }

  return (
    <>
      <h1>Exercises</h1>
      <button><ExerciseForm addExercise={addExercise}/>add exercise</button>
      {renderExercises()}
    </>
  );
};

export default Exercises;
