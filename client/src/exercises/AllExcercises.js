import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const AllExercises = () => {

  const [exercises, setExercises] = useState([])

  
  useEffect(()=>{
    getAllExercises()
  },[])


  const getAllExercises = async() => {
    try {
      let res = await Axios.get("/api/all_exercises")
      console.log(res.data)
      setExercises(res.data)
    } catch (error) {
      console.log(error)
    }

  };
  
  const renderAllExercises = () => {
    return exercises.map((exercise) => {
      return (
      
        <div>
          <Link key={exercise.id} to={`showexercise/${exercise.id}`}>
            <h1>{exercise.activity}</h1>
          </Link>
          <p>{exercise.description}</p>
        </div>
      
      )
    })
  }
  

  return (
    <>
      <h1>Choose an exercise</h1>
      {renderAllExercises()}
    </>
    

  )

}

export default AllExercises