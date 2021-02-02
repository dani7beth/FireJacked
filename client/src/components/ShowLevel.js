import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState, useEffect } from "react";
import Axios from "axios";
import { NateSubContainer, NateSubContainerLeft, NateSubContainerRight } from "../components/Styles";



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
  // console.log(submission)
  return(
    <div onClick={()=>{renderClickedSubmission(submission)}}>
        <p>
          01-23-date | {level.name} | {level.measurement ==="Bodyweight" ? `${outcome} ${level.metric}` : ""} | {submission.status}
        </p>
    </div>
  )

}

export default ShowLevel;