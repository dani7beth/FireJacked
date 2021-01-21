import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const SubmissionAdmin = ({name, completed, id}) => {
return (
  <>
  <div>
    <h1>{name}</h1>
    <p>{completed ? "Completed" : "Not completed"}</p>
    <Link to={`/admin-submissions/${id}`}>
      <Button>Verify</Button>
    </Link>
  </div>
    
    
  </>
)
}

export default SubmissionAdmin