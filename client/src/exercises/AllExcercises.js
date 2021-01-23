import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import { Box, BoxCustom } from "../components/Styles";
import AllExercise from "./AllExercise";
import Exercises from "./Exercises";



const AllExercises = () => {

  const [exercises, setExercises] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [dataLength, setDataLength] = useState(0)
  
  

  
  useEffect(()=>{
    getAllExercises()
  },[])


  const getAllExercises = async() => {
    // debugger
    try {
      let res = await Axios.get("/api/all_exercises")
      console.log(res.data)
      let exercisesX = normalizeData(res.data.data)
      setExercises([...exercises,...exercisesX])
      setTotalPages(res.data.total_pages)
      setDataLength(res.data.total_length)
    } catch (error) {
      console.log(error)
    }

  };

  const loadMore = async () => {
    const pageX = page + 1
    try {
      let res = await Axios.get(`/api/all_exercises?page=${pageX}`)
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
    return exercises.map(x => {
      
        return (
               <AllExercise key={x.level_id} {...x}/>
            )
        })
      }
  
      

  const renderAllExercises = () => {
    return exercises.map((exercise) => {
      return (
        <div key={exercise.id}>
          <Link to={`showexercise/${exercise.id}`}>
            <h1>{exercise.activity}</h1>
            <p>{exercise.id}</p>
          </Link>
          <p>{exercise.description}</p>
        </div>
      )
    })
  }

  return (
    <>
      <h1>Choose an exercise</h1>
      <BoxCustom>
        <InfiniteScroll
            dataLength={exercises.length}
            next={()=>loadMore()}
            hasMore={exercises.length === dataLength ? false : true }
            loader={<h4>Loading...{exercises.length} {dataLength}</h4>}
            height={300}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>End of Exercises</b>
              </p>
            }
          >
        {renderExercisesWithLevels()}
        </InfiniteScroll>
      </BoxCustom>
    </>
  )

  

}

export default AllExercises

