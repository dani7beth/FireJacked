import { useEffect, useState } from "react";
import axios from "axios";
import Exercise from './Exercise';
import ExerciseForm from './ExerciseForm';
import { Button, Modal } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from 'styled-components'
import { Box } from "../components/Styles";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  useEffect(() => {
    getExercises();
  }, []);

  const getExercises = () => {
    axios
      .get("/api/exercises")
      .then((response) => {
        console.log(response.data)
        setExercises(response.data.data);
        setTotalPages(response.data.total_pages)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadMore = async () => {
    const pageX = page + 1
    try {
      let res = await axios.get(`/api/exercises?page=${pageX}`)
      setExercises([...exercises, ...res.data.data])
      setPage(pageX)
    } catch (error) {
      console.log(error)
    }
  }

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
      <Box>
        <InfiniteScroll
            dataLength={exercises.length}
            next={()=>loadMore()}
            hasMore={exercises.length + 1 < totalPages * 10 ? true : false }
            loader={<h4>Loading...</h4>}
            height={700}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>End of Exercises</b>
              </p>
            }
          >
        {renderExercises()}
        </InfiniteScroll>
      </Box>
    </>
  );
};

// <ExerciseForm addExercise={addExercise}/>

export default Exercises;

