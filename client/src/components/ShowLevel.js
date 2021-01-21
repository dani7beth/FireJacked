import { Link } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const ShowLevel = ({name, measurement, reps, timeframe, sets, metric, multiplier, id}) => {

  const { user } = useContext(AuthContext)

  let outcome = multiplier * user.weight
  let minute = Math.floor(timeframe/60)
  let seconds = timeframe%60 < 10 ? "0" + timeframe%60 : timeframe%60
  let duration = minute + ":" + seconds

  
  return(
    <div>
      <hr />
      <h1>Level Name: {name}</h1>
      <p> {measurement ==="Bodyweight" ? `${outcome} ${metric}` : ""}</p>
      <p> Timeframe: {duration}</p>
      <p> Reps: {reps}</p>
      <p> Sets: {sets}</p>
      
        <Link to={`/submissions/${id}`}>
          <Button>Submission</Button>
        </Link>
        <hr />
    </div>
  )

}

export default ShowLevel;