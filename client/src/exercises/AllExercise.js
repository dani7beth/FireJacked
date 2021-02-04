import { useState ,useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"
import { Button, Modal } from "react-bootstrap"
import SubmissionForm from "../submissions/SubmissionForm"
import styled from 'styled-components';
import { UserExerciseLevelContainer, UserExerciseLevelLeft, UserExerciseLevelRight, UserExerciseLevelButtons, StyledLink } from "../components/Styles"

const AllExercise = ({activity, exercise_id, category, measurement, multiplier,timeframe,metric,reps,sets,user_status,level_name, level_id, addSubmission}) => {
  const [showLevel, setShowLevel] = useState(true)
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const { user } = useContext(AuthContext)

  let outcome = multiplier * user.weight
  let minute = Math.floor(timeframe/60)
  let seconds = timeframe%60 < 10 ? "0" + timeframe%60 : timeframe%60
  let duration = minute + ":" + seconds

  return(
    <>
      <UserExerciseLevelContainer>
      <UserExerciseLevelLeft>
        <StyledLink to={`showexercise/${exercise_id}`}>  
          <h3>{activity}</h3>
        </StyledLink>
          <h5>Movement Type: {category}</h5>
          <p>Level Name: {level_name}{" | "}
          {measurement ==="Bodyweight" ? `${outcome} ${metric}` : ""}</p>
          <p>Timeframe: {duration}{" | "}
          Reps: {reps}{" | "}
          Sets: {sets}{" | "}
          status: {user_status}</p>
        </UserExerciseLevelLeft>
        <UserExerciseLevelRight>
            <Link to={`/${exercise_id}/user_see_history/${level_id}`}>
              <ViewButton>View</ViewButton>
            </Link>
            <UserExerciseLevelButtons onClick={handleShow}>Upload</UserExerciseLevelButtons>
        </UserExerciseLevelRight>
      </UserExerciseLevelContainer>


      <Modal show={show} onHide={handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>New Submission</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SubmissionForm
              handleUserDashHide={handleHide}
              level_id={level_id}
              addSubmission={addSubmission}
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
    </>
  )
}

export default AllExercise

export const ViewButton = styled(Button)`
  margin: 5px;
  width: 7em;
  color: white;
  background-color: black;
  border-color: black;
  &:hover {
    color: white;
    background-color: #febd4a;
    border-color: #d6d6d6;
  }
`