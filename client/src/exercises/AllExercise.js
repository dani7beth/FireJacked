import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"
import { Button } from "react-bootstrap"

const AllExercise = ({activity, exercise_id, category, measurement, multiplier,timeframe,metric,reps,sets,user_status,level_name, level_id}) => {
  // const [showLevel, setShowLevel] = useState(true)

  const { user } = useContext(AuthContext)

  let outcome = multiplier * user.weight
  let minute = Math.floor(timeframe/60)
  let seconds = timeframe%60 < 10 ? "0" + timeframe%60 : timeframe%60
  let duration = minute + ":" + seconds

  return(
    <>
      <span>
        <Link to={`showexercise/${exercise_id}`}>  
          <h3>{activity}</h3>
        </Link>
          <h5>Movement Type: {category}</h5>
          <p>Level Name: {level_name}{" | "}
          {measurement ==="Bodyweight" ? `${outcome} ${metric}` : ""}</p>
          <p>Timeframe: {duration}{" | "}
          Reps: {reps}{" | "}
          Sets: {sets}{" | "}
          status: {user_status}</p>
        <Link to={`/${exercise_id}/user_see_history/${level_id}`}>
          <Button>View Submission</Button>
        </Link>
          <Button>Upload</Button>

        
      </span>
    </>
  )
}

export default AllExercise