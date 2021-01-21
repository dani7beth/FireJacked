import { useEffect, useState } from "react";
import axios from "axios";
import Level from "./Level";
import LevelForm from "./LevelForm";
import { Button, Modal } from "react-bootstrap";

const Levels = (props) => {
  const [levels, setLevels] = useState([]);
  const exerciseID = props.match.params.id;

  const getLevels = () => {
    axios
      .get(`/api/exercises/${exerciseID}/levels`)
      .then((response) => {
        setLevels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLevels();
  }, []);
  

  const deleteLevel = (id) => {
    axios.delete(`/api/exercises/${exerciseID}/levels/${id}`)
      .then((res) => {
        setLevels(levels.filter((level)=> level.id !== id))
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error in delete level");
      })
  }

  const addLevel = (level) =>{
    setLevels([...levels, level]);
  }

  const renderLevels = () => {
    return levels.map((level) => (
      <Level key={level.id} levelProp={level} deleteLevel={deleteLevel} exerciseID={exerciseID}/>
    ))
  }

  const [addModal, setAddModal] = useState(false);

  const addModalShow = () => setAddModal(true);
  const addModalHide = () => setAddModal(false);
  
  return (
    <>
      <Button variant="primary" onClick={addModalShow}>
        Add a new level
      </Button>
      <Modal show={addModal} onHide={addModalHide}>
        <Modal.Header closeButton>
          <Modal.Title>Enter new level info here</Modal.Title>
        </Modal.Header>
        <Modal.Body><LevelForm exerciseID={exerciseID} addLevel={addLevel} addModalHide={addModalHide} /></Modal.Body>
      </Modal>
      <h1>levels</h1>
      {renderLevels()}
    </>
  );
};

export default Levels;
