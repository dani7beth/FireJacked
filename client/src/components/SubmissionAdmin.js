import { Link } from "react-router-dom"


const SubmissionAdmin = ({name, completed, id}) => {
return (
  <>
  <div>
    <h1>{name}</h1>
    <p>{completed ? "Completed" : "Not completed"}</p>
    <Link to={`/admin-submissions/${id}`}>
      <button>Verify</button>
    </Link>
  </div>
    
    
  </>
)
}

export default SubmissionAdmin