import ExerciseForm from "./ExerciseForm";
import { useState, } from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";

const Exercise = ({ exerciseProp, deleteExercise, editExercises }) => {
  const [ exercise, setExercise] = useState()
  // const [ showDeleteForm, setshowDeleteForm] = useState(false)
  const [showDelete, setshowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteShow = () => setshowDelete(true);
  const handleDeleteHide = () => setshowDelete(false);
  const handleEditShow = () => setShowEdit(true);
  const handleEditHide = () => setShowEdit(false);

  const editExercise = (res) => {
    const newExercise = res;
    if(newExercise === exerciseProp.id) return setExercise(newExercise)
    else return exerciseProp
  }



 
  return (
    <div>
        <Link to={`/exercise/${exerciseProp.id}/levels`}><h1>{exerciseProp.activity}</h1></Link>
        <img src={exerciseProp.image} style={{height:'300px', width:'200px'}}/>
        {/* { showDeleteForm && <ExerciseForm showDeleteFormToggle={showDeleteFormToggle} editExercise={editExercise} exerciseProp={exerciseProp}/>}
        <button onClick={showDeleteFormToggle}>{showDeleteForm ? "Close Form" : "Show Form"}</button>
        <button onClick={()=> deleteExercise(exerciseProp.id)}>Delete</button> */}
        {/* <Levels exercise={exerciseProp}/> */}
        <Button variant="primary" onClick={handleEditShow}>
        Edit
      </Button>
      <Modal show={showEdit} onHide={handleEditHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit this exericise</Modal.Title>
        </Modal.Header>
        <Modal.Body><ExerciseForm editExercise={editExercise} exerciseProp={exerciseProp} handleEditHide={handleEditHide} editExercises={editExercises} /></Modal.Body>
      </Modal>

        <Button variant="danger" onClick={handleDeleteShow}>
        Delete
      </Button>
      <Modal show={showDelete} onHide={handleDeleteHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this exericise</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this exercise?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteHide}>
            No
          </Button>
          <Button variant="danger" onClick={()=> deleteExercise(exerciseProp.id)}>
            Yes, delete.
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Exercise;
