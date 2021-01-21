import LevelForm from "./LevelForm";
import {Modal, Button} from 'react-bootstrap'
import { useState, } from 'react';

const Level = ({ levelProp, deleteLevel, exerciseID}) => {
  const [ level, setLevel] = useState()
  // const [ toggle, setToggle] = useState(false)

  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);



  const editLevel = (res) => {
    const newLevel = res;
    if(newLevel === levelProp.id) return setLevel(newLevel)
    else return levelProp
  }
 
  return (
    <>
      <h1>{levelProp.name}</h1>
      {/* { toggle && <LevelForm  setToggle={setToggle} editLevel={editLevel} levelProp={levelProp} exerciseID={exerciseID}/>}
      <button onClick={() => setToggle(!toggle)}>{toggle? "Close Form" : "Show Form"}</button> */}

      <Button variant="primary" onClick={handleEditShow}>
        Edit
      </Button>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body><LevelForm handleEditClose={handleEditClose} editLevel={editLevel} levelProp={levelProp} exerciseID={exerciseID}/></Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleEditClose}>
            Cancel
          </Button> */}
          {/* <Button variant="danger" onClick={()=> howToEdit() } >
            Submit changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this level</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={()=> deleteLevel(levelProp.id)}>
            Yes, delete.
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Level;
