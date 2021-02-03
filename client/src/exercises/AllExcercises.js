import Axios from "axios"
import { useEffect, useState } from "react"
// import InfiniteScroll from 'react-infinite-scroller';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components'
import { Box, BoxCustom, BoxCustomAllExercises, AllExercisesContainer } from "../components/Styles";
import AllExercise from "./AllExercise";
import FilterByCategory from './FilterByCategory';
import { Button, Form } from "react-bootstrap";

const AllExercises = () => {
  const [exercises, setExercises] = useState([])
  const [defaultExercises, setDefaultExercises] = useState([])
  const [page, setPage] = useState(1)
  // const [totalPages, setTotalPages] = useState(0)
  // const [dataLength, setDataLength] = useState(0)
  const [searchText, setSearchText] = useState("")
  const [currentCategory, setCurrentCategory] = useState("")
  const [category, setCategory] = useState("")

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
      setDefaultExercises(exercisesX)
    } catch (error) {
      console.log(error)
    }
  };

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
    return finalArray
  }


  const renderExercisesWithLevels = () => {
    return exercises.map(x => {
      return (
        <AllExercise key={x.level_id} {...x} addSubmission={addSubmission}/>
      )
    })
  }

  const searchFor = (searchText) => {
    // debugger
    console.log("Searched")
    setSearchText(searchText)
    let filteredExerOne = defaultExercises.filter(x => x.activity !== null)
    let filteredExers = filteredExerOne.filter((str) => str.activity.indexOf(searchText) > -1)
    setExercises(filteredExers)
    console.log(searchText)
  }

  const dataByCategory = (category) => {
    // debugger
    console.log("Searched")
    setCategory(category)
    let filteredExerOne = defaultExercises.filter(x => x.category !== null)
    let filteredExers = filteredExerOne.filter((str) => str.category.indexOf(category) > -1)
    setExercises(filteredExers)
    console.log(searchText)
  }

  const addSubmission=(x)=>{
    getAllExercises()
  }


  return (

    <AllExercisesContainer>
      <Form>
        <Form.Label>Search for an Exercise</Form.Label>
        <Form.Control
          placeholder="Search Here"
          type="text"
          value={searchText}
          onChange={(e) => searchFor(e.target.value)} />
      </Form>
      
      <FilterByCategory dataByCategory={dataByCategory}/>

      <BoxCustomAllExercises>
          {renderExercisesWithLevels()}
      </BoxCustomAllExercises>
    </AllExercisesContainer>
  )
}

export default AllExercises

