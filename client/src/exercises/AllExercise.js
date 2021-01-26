import { useState } from "react"
import { Link } from "react-router-dom"

const AllExercise = ({activity, exercise_id, level_name, levels }) => {
  const [showLevel, setShowLevel] = useState(true)

  return(
    <>
      <span>
        <Link to={`showexercise/${exercise_id}`}>  
          <h5>{activity} {exercise_id}</h5>
        </Link>
        <button onClick={()=>setShowLevel(!showLevel)}>{showLevel ? "Expand" : "Collapse"}</button>
      </span>
      {showLevel ? "" : levels.map((x) =>  {
        return(
        <Link to={`submissions/${x.level_id}`}>    
          <p>{x.level_name}</p>
        </Link>
        )
      }
      )}
    </>
  )
}

export default AllExercise