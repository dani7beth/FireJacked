import ExerciseForm from "./ExerciseForm";
import { useState, } from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import Levels from "../components/Levels";
import { AdminExerciseContainerRight, LevelsBox, UserExerciseLevelContainer, AdminExerciseContainerLeft, AdminExerciseContainerMiddle, StyledLink } from "../components/Styles";
import {MdEdit, MdDelete, MdUnfoldMore, MdUnfoldLess} from 'react-icons/md'

const Exercise = ({ exerciseProp, deleteExercise, editExercises, activity, exercise_id, levels }) => {
  const [ exercise, setExercise] = useState()
  // const [ showDeleteForm, setshowDeleteForm] = useState(false)
  const [showDelete, setshowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showLevel, setShowLevel] = useState(true)

  const handleDeleteShow = () => setshowDelete(true);
  const handleDeleteHide = () => {
    console.log('made it here')
    setshowDelete(false);
  }
  const handleEditShow = () => setShowEdit(true);
  const handleEditHide = () => setShowEdit(false);
  

  const editExercise = (res) => {
    const newExercise = res;
    if(newExercise === exerciseProp.id) return setExercise(newExercise)
    else return exerciseProp
  }

  return (
    <div>
      <UserExerciseLevelContainer>

        {/* Child1 */}
        <AdminExerciseContainerLeft>
          <StyledLink to={`/show-exercises-for-admin/${exerciseProp.exercise_id}`}>  
            <h3>{exerciseProp.activity}</h3>
          </StyledLink>
            <h5>{exerciseProp.category}</h5>
        </AdminExerciseContainerLeft>

         {/* Child 2 */}
        <AdminExerciseContainerMiddle>
          
        </AdminExerciseContainerMiddle>

        {/* Childe 3 */}
        <AdminExerciseContainerRight>
          <MdEdit onClick={handleEditShow} style={{fontSize: "24px",cursor: "pointer"}}/>
          <MdDelete onClick={handleDeleteShow} style={{fontSize: "24px", cursor: "pointer"}}/>
          <MdUnfoldMore onClick={() => setShowLevel(!showLevel)} style={{fontSize: "24px"}}/>
          {/* {showLevel ? {MdUnfoldMore} : {MdUnfoldLess}} */}
          
          {showLevel ? "" : <Levels exerciseID={exerciseProp.exercise_id} />}
        </AdminExerciseContainerRight>

        {/* Modals */}
        <Modal show={showEdit} onHide={handleEditHide}>
          <Modal.Header closeButton>
            <Modal.Title>Edit this exericise</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExerciseForm editExercise={editExercise} exerciseProp={exerciseProp} handleEditHide={handleEditHide} editExercises={editExercises} />
          </Modal.Body>
        </Modal>

     
      <Modal show={showDelete} onHide={handleDeleteHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this exericise</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this exercise?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleDeleteHide()}}>
            No
          </Button>
          <Button variant="danger" onClick={()=> {
            deleteExercise(exerciseProp.exercise_id)
            handleDeleteHide()
            }}>
            Yes, delete.
          </Button>
        </Modal.Footer>
      </Modal>
      
      <br/>
      <br/>
      {/* <Levels /> */}
      
    
      </UserExerciseLevelContainer>
    </div>
  )
}
export default Exercise;
