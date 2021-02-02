import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState, useEffect } from "react";
import Axios from "axios";
import SubmissionForm from "../submissions/SubmissionForm";
import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components';


const ShowLevel = ({id, level_id, status, submission, renderClickedSubmission, editCalledSubmission, deleteSubmission}) => {

  const [level, setLevel] = useState({})
  const [levelLoading, setLevelLoading] = useState(true)
  const { user } = useContext(AuthContext)

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleEditShow = () => setShowEdit(true);
  const handleEditHide = () => setShowEdit(false);
  const handleDeleteShow = () => setShowDelete(true);
  const handleDeleteHide = () => setShowDelete(false);

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
    <>
    <StyledSub onClick={()=>{renderClickedSubmission(submission)}}>
      <p>
         01-23-date | {level.name} | {level.measurement ==="Bodyweight" ? `${outcome} ${level.metric}` : ""} | {submission.status}
      </p>
      <p>
        Timeframe: {duration}{" | "}
        Reps: {level.reps}{" | "}
        Sets: {level.sets}{" | "}
      <Button variant="primary" size='sm' onClick={handleEditShow}>Edit</Button>
      <Button variant="danger" size='sm' onClick={handleDeleteShow}>Delete</Button>
      </p>
    </StyledSub>

        <Modal show={showEdit} onHide={handleEditHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SubmissionForm
            submissionProp={submission}
            editCalledSubmission={editCalledSubmission}
            handleEditHide={handleEditHide}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
        </Modal>

        <Modal show={showDelete} onHide={handleDeleteHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this level</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteHide}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteSubmission(submission.id)}
          >
            Yes, delete.
          </Button>
        </Modal.Footer>
        </Modal>
      </>
  )

}

export default ShowLevel;

export const StyledSub = styled.div`
  padding-bottom:20px;
`