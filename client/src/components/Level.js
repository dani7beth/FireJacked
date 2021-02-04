import LevelForm from "./LevelForm";
import {Modal, Button} from 'react-bootstrap'
import { useState, } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { LevelsParent, LevelChildContent } from "./Styles";

const Level = ({ levelProp, deleteLevel, exerciseID, editLevels}) => {
  const [ level, setLevel] = useState()

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

  // let outcome = levelProp.multiplier * user.weight
  let minute = Math.floor(levelProp.timeframe/60)
  let seconds = levelProp.timeframe%60 < 10 ? "0" + levelProp.timeframe%60 : levelProp.timeframe%60
  let duration = minute + ":" + seconds
 
  return (
    <>
      <LevelsParent>
        <MdEdit variant="primary" onClick={handleEditShow} style={{fontSize:"24px",cursor:"pointer"}}/>
        <MdDelete variant="danger" onClick={handleShow} style={{fontSize:"24px",cursor:"pointer"}}/>
        <LevelChildContent>
          {levelProp.name} -> {" "}
          {levelProp.multiplier === 0 ? "" : `${levelProp.multiplier} X ${levelProp.measurement === "-" ? "" : levelProp.measurement} `} 
          {" "}{levelProp.metric}
          {" "}{duration === "0:00" ? "" : ` | ${duration}`} 
          {" "}{levelProp.reps === 0 ? "" : `| Reps: ${levelProp.reps} `} 
          {levelProp.sets === 0 ? "" : ` | Sets: ${levelProp.sets}`} 
        </LevelChildContent>
      </LevelsParent>
        


      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body><LevelForm handleEditClose={handleEditClose} editLevel={editLevel} levelProp={levelProp} exerciseID={exerciseID} editLevels={editLevels} /></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

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
