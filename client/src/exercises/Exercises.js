import { useEffect, useState } from "react";
import axios from "axios";
import Exercise from './Exercise';
import ExerciseForm from './ExerciseForm';
import { Button, Modal } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from 'styled-components'
import { BoxAdminExercises } from "../components/Styles";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [dataLength, setDataLength] = useState(0)
  const [searchText, setSearchText] = useState("")

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  useEffect(() => {
    getExercises();
  }, []);

  const getExercises = async (searchText) => {
    // debugger
    try {
      let res = await axios.get(`/api/exercises/?SearchText=${searchText ? searchText : ""}`)
      console.log(res.data)
      let exercisesX = normalizeData(res.data.data)
      // debugger
      setExercises(exercisesX)
      setTotalPages(res.data.total_pages)
      setDataLength(res.data.total_length)
    } catch (error) {
      console.log(error)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    getExercises(searchText)
    // renderExercisesWithLevels()
  }

  const loadMore = async () => {
    const pageX = page + 1
    console.log(pageX)
    try {
      let res = await axios.get(`/api/exercises?page=${pageX}&SearchText=${searchText ? searchText : ""}`)
      let exercisesX = normalizeData(res.data.data)
      setExercises([...exercises,...exercisesX])
      // setExercises([...exercises, ...res.data.data])
      setPage(pageX)
    } catch (error) {
      console.log(error)
    }
  }

  const normalizeData = (arrayOfObjects) => {
    let key = "exercise_id"
  
    const exercises = [...new Map(arrayOfObjects.map(item => [item[key], {category: item.category, activity:item.activity, exercise_id:item.exercise_id}])).values()]
  
    const formattedExercises = exercises.map((x) => {
      return {...x, levels: arrayOfObjects.filter(y => y.exercise_id === x.exercise_id)}
    })
  
    console.log(formattedExercises)
    
    return formattedExercises

  }

  const renderExercisesWithLevels = () => {
    // debugger
    return exercises.map(x => {
        return (
               <Exercise key={x.id} exerciseProp={x} deleteExercise={deleteExercise} editExercises={editExercises} {...x} />
            )
        })
      }

  const addExercise = (exercise) => {
    setExercises([exercise, ...exercises])
    console.log(exercise);
};

  const deleteExercise = (id) => {
    axios.delete(`/api/exercises/${id}`)
      .then((res) => {
        const newExercises = exercises.filter((exercise)=> exercise.exercise_id !== id)
        setExercises(newExercises)
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error in delete exercise");
        console.log(err)
      })
  }

const editExercises = (exercise) => {
  let newExercises = exercises.map((e)=> e.id !== exercise.id ? e : exercise )
  setExercises(newExercises);
}

  
  
  return (
    <>
      <h1>Exercises</h1>

      <Button variant="primary" onClick={handleShow}>
        Add a new exercise
      </Button>
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Enter exercise info here</Modal.Title>
        </Modal.Header>
        <Modal.Body><ExerciseForm addExercise={addExercise} handleHide={handleHide} /></Modal.Body>
      </Modal>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <input 
          label = "Search for an Exercise" 
          placeholder="Search Here" 
          type="text" 
          value={searchText} 
          onChange={(e)=>setSearchText(e.target.value)}/>
          <button type="submit">Search</button>
          <button onClick={()=>setSearchText("")}>Clear Search</button>
      </form>

      <BoxAdminExercises>
        <InfiniteScroll
            dataLength={exercises.length}
            next={()=>loadMore()}
            hasMore={exercises.length === dataLength ? false : true }
            loader={<h4>Loading... exercises.length = {exercises.length} dataLength= {dataLength} </h4>}
            height={450}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>exercises.length = {exercises.length} dataLength= {dataLength}</b>
              </p>
            }
          >
        {renderExercisesWithLevels()}
        </InfiniteScroll>
      </BoxAdminExercises>
    </>
  );
};

// <ExerciseForm addExercise={addExercise}/>

export default Exercises;

