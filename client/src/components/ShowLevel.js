import { Link } from "react-router-dom"

const ShowLevel = ({name, measurement, reps, timeframe, sets, id}) => {

  return(
    <div>
      <h1>{name}</h1>
      <p>{measurement}</p>
      <p>{reps}</p>
      <p>{timeframe}</p>
      <p>{sets}</p>
        <Link to={`/submissions/${id}`}>
          <button>Submission</button>
        </Link>
    </div>
  )

}

export default ShowLevel;