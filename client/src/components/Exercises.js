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

  {/* 
      addExercise = (res) => {
        console.log('hello')
        const res = exercise
        exercise(setExercise)
      }
  */}

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
      <button><ExerciseForm/>add exercise</button>
      {renderExercises()}
    </>
  );
};

export default Exercises;
