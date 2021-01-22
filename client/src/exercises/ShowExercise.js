import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ShowLevel from '../components/ShowLevel';
import { AuthContext } from "../providers/AuthProvider";



const ShowExercise = () => {
  const [levels, setLevels] = useState([])
  const [exercise, setExercise] = useState({})

  const { exercise_id } = useParams()

  const { user } = useContext(AuthContext)

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

    if (user.weight === null || user.weight === null){
      return (
        <>
          <h1>Please enter your weight on your <a href="/user_dash">user dashboard</a> to view excercise levels that are based on weight.</h1>
        </>
      )
    }

    return levels.map((level) => {
      return <ShowLevel key={level.id} {...level} />
    })
  }

  return (
    <>
      <h1>All Levels for {exercise.activity}</h1>
      {renderLevels()}
    </>
    )
}

export default ShowExercise;