import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components'
import { Box, BoxCustom } from "../components/Styles";
import AllExercise from "./AllExercise";
import Exercises from "./Exercises";
import FilterByCategory from './FilterByCategory';
import { Button, Modal, Form } from "react-bootstrap";

const AllExercises = () => {
  const [exercises, setExercises] = useState([])
  const [page, setPage] = useState(1)
  // const [totalPages, setTotalPages] = useState(0)
  // const [dataLength, setDataLength] = useState(0)
  const [searchText, setSearchText] = useState("")
  const [currentCategory, setCurrentCategory] = useState("")

  useEffect(()=>{
    getAllExercises()
  },[])

  const getAllExercises = async (searchText, currentCategory) => {
    // debugger
    try {
      let res = await Axios.get(`/api/all_exercises?SearchText=${searchText ? searchText : ""}&category=${currentCategory ? currentCategory : ""}`)
      console.log(res.data)
      let exercisesX = normalizeData(res.data)
      setExercises(exercisesX)
      // setTotalPages(res.data.total_pages)
      // setDataLength(res.data.total_length)
    } catch (error) {
      console.log(error)
    }
  };

  // const loadMore = async () => {
  //   const pageX = page + 1
  //   try {
  //     let res = await Axios.get(`/api/all_exercises?page=${pageX}&SearchText=${searchText ? searchText : ""}&category=${currentCategory ? currentCategory : ""}`)
  //     let exercisesX = normalizeData(res.data.data)
  //     setExercises([...exercises,...exercisesX])
  //     // setExercises([...exercises, ...res.data.data])
  //     setPage(pageX)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const normalizeData = (arrayOfObjects) => {
  //   let key = "exercise_id"
  //   const exercises = [...new Map(arrayOfObjects.map(item => [item[key], {category: item.category, activity:item.activity, exercise_id:item.exercise_id}])).values()]
  //   const formattedExercises = exercises.map((x) => {
  //     return {...x, levels: arrayOfObjects.filter(y => y.exercise_id === x.exercise_id)}
  //   })
  //   console.log(formattedExercises)
  //   return formattedExercises
  // }

  const normalizeData = (arrayOfObjects) => {
    let key = "exercise_id"

    let finalArray = []

    const exercises = [...new Map(arrayOfObjects.map(item => [item[key], { category: item.category, activity: item.activity, exercise_id: item.exercise_id}])).values()]
    
    const formattedExercises = exercises.map((x) => {
          return { ...x, levels: arrayOfObjects.filter(y => y.exercise_id === x.exercise_id) }
        })

    formattedExercises.map((x)=>{
        // debugger
        if (x.levels[0].status != 'Approved Initiated'){
          console.log(x.levels[0].status)
          finalArray.push({...x.levels[0],index:0})
        }
        if (x.levels[0].status == 'Approved Initiated'  && x.levels[1].status != 'Approved Committed'){
          console.log(x.levels[0].status)
            finalArray.push({...x.levels[1],index:1})
        }
        if (x.levels[1].status ==  'Approved Committed' && x.levels[2].status != 'Approved Proven'){
          console.log(x.levels[0].status)
            finalArray.push({...x.levels[2],index:2})
        }
        if (x.levels[2].status ==  'Approved Proven'){
          console.log(x.levels[0].status)   
        }
    })

    // console.log(finalArray)
    return finalArray
  }

  const dataByCategory = (category) => {
    if (exercises) {
      setCurrentCategory(category)
      getAllExercises(searchText, category)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    getAllExercises(searchText,currentCategory)
    // renderExercisesWithLevels()
  }

  const handleClearSearch = () => {
    setSearchText("")
    getAllExercises("", currentCategory)
  }

  const renderExercisesWithLevels = () => {
    return exercises.map(x => {
      return (
        <AllExercise key={x.level_id} {...x}/>
      )
    })
  }

  // const renderAllExercises = () => {
  //   return exercises.map((exercise) => {
  //     return (
  //       <div key={exercise.id}>
  //         <Link to={`showexercise/${exercise.id}`}>
  //           <h1>{exercise.activity}</h1>
  //           <p>{exercise.id}</p>
  //         </Link>
  //         <p>{exercise.description}</p>
  //       </div>
  //     )
  //   })
  // }

  return (
    <>
      <h1>Choose an exercise</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Label>Search for an Exercise</Form.Label>
        <Form.Control
          placeholder="Search Here"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} />
        <Button type="submit">Search</Button>
        <Button onClick={handleClearSearch}>Clear Search</Button>
      </Form>
      
      <FilterByCategory dataByCategory={dataByCategory}/>
      <BoxCustom>
        {/* <InfiniteScroll
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
        > */}
          {renderExercisesWithLevels()}
        {/* </InfiniteScroll> */}
      </BoxCustom>
    </>
  )
}

export default AllExercises

