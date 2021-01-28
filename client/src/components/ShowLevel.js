import { Link } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";


const ShowLevel = ({id, level_id, status, submission, renderClickedSubmission}) => {

  const [level, setLevel] = useState({})
  const [levelLoading, setLevelLoading] = useState(true)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (id){
      getLevel()
    }
  }, [id])

  const getLevel = async () => {
    try {
      let res = await Axios.get(`/api/levels/${level_id}`)
      setLevel(res.data)
      setLevelLoading(false)
      console.log("level: ", res.data)
    } catch (error) {
      console.log(error)

    }
  }

  let outcome = level.multiplier * user.weight
  let minute = Math.floor(level.timeframe/60)
  let seconds = level.timeframe%60 < 10 ? "0" + level.timeframe%60 : level.timeframe%60
  let duration = minute + ":" + seconds
  console.log(submission)
  return(
    <div onClick={()=>{renderClickedSubmission(submission)}}>
      <hr />
      <p>Level Name: {level.name}{" | "}
       {/* - SubmissionID: {id} LevelID: {level_id} */}
      {level.measurement ==="Bodyweight" ? `${outcome} ${level.metric}` : ""}</p>
      <p>Timeframe: {duration}{" | "}
      Reps: {level.reps}{" | "}
      Sets: {level.sets}{" | "}
      status: {submission.status}</p>
      
        {/* <Link to={`/submissions/${id}`}>
          <Button>Submission</Button>
        </Link> */}
        <hr />
    </div>
  )

}

export default ShowLevel;