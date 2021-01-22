import { useEffect, useState } from "react";
import axios from "axios";
import Exercise from './Exercise';
import ExerciseForm from './ExerciseForm';
import { Button, Modal } from "react-bootstrap";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const getExercises = () => {
    axios
      .get("/api/exercises")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getExercises();
  }, []);
    
  const deleteExercise = (id) => {
    axios.delete(`/api/exercises/${id}`)
      .then((res) => {
        setExercises(exercises.filter((exercise)=> exercise.id !== id))
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error in delete exercise");
      })
  }

  const editExercises = (exercise) => {
    let newExercises = exercises.map((e)=> e.id !== exercise.id ? e : exercise )
    setExercises(newExercises);
  }

  const renderExercises = () => {
    return exercises.map((exercise) => (
      <Exercise key={exercise.id} exerciseProp={exercise} deleteExercise={deleteExercise} editExercises={editExercises} />
    ))
  }

  const addExercise = (exercise) => {
    setExercises([exercise, ...exercises])
    console.log(exercise);
};
  
  return (
    <>
      <h1>Exercises</h1>
      {/* <ExerciseForm addExercise={addExercise} handleHide={handleHide} /> */}
      <Button variant="primary" onClick={handleShow}>
        Add a new exercise
      </Button>
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Enter exercise info here</Modal.Title>
        </Modal.Header>
        <Modal.Body><ExerciseForm addExercise={addExercise} handleHide={handleHide} /></Modal.Body>
      </Modal>
      {renderExercises()}
    </>
  );
};

// <ExerciseForm addExercise={addExercise}/>

export default Exercises;
