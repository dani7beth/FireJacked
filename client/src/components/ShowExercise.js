import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShowLevel from "./ShowLevel";


const ShowExercise = () => {
  const [levels, setLevels] = useState([])

  const { exercise_id } = useParams()

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

  useEffect(() => {
    getLevels();
  }, []);

  const renderLevels = () => {
    return levels.map((level) => {
      return <ShowLevel key={level.id} {...level} />
    })
  }

  return (
    <>
      <h1>levels</h1>
      {renderLevels()}
    </>
    )
}

export default ShowExercise;