import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShowLevel from '../components/ShowLevel';


const ShowExercise = () => {
  const [levels, setLevels] = useState([])
  const [exercise, setExercise] = useState({})

  const { exercise_id } = useParams()

  useEffect(() => {
    getLevels();
    getExercise()
  }, []);

  const getExercise = async () => {
    try {
      // debugger
      let res = await Axios.get(`/api/exercises/${exercise_id}`)
      console.log(res.data)
      setExercise(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  const getLevels = () => {
    Axios
      .get(`/api/exercises/${exercise_id}/levels`)
      .then((response) => {
        console.log(response.data)
        setLevels(response.data)
      })
      .catch((err) => {
        console.log(err)
      }
  )}

  

  const renderLevels = () => {
    return levels.map((level) => {
      return <ShowLevel key={level.id} {...level} />
    })
  }

  return (
    <>
      <h1>All Levles for {exercise.activity}</h1>
      {renderLevels()}
    </>
    )
}

export default ShowExercise;