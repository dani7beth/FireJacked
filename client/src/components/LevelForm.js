import { useState } from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";

const LevelForm = ({ levelProp, addLevel, exerciseID, editLevel, handleEditClose, addModalHide, editLevels }) =>{

  const [level, setLevel] = useState(
    levelProp ? {
      name: levelProp.name,
      measurement: levelProp.measurement,
      reps: levelProp.reps,
      timeframe: levelProp.timeframe,
      set: levelProp.set,
    }:
    {
      name:'',
      measurement:'',
      reps:'',
      timeframe:'',
      set:'',
    }
  )

  const editCallLevel = () => {
    axios.put(`/api/exercises/${exerciseID}/levels/${levelProp.id}`, level)
      .then((res) => {
        console.log(res.data)
        editLevel(res.data)
        editLevels(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const addCallLevel = () => {
    axios.post(`/api/exercises/${exerciseID}/levels`, level )
    .then((res)=>{
      console.log(level)
      addLevel(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  };
  
  const handleChange = (e) => {
    setLevel({...level, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (levelProp) {
      editCallLevel();
    }
    else {
      addCallLevel();
    }
    // whichClose(); I can't test this cuz something broke when I pulled.. but this should make the form auto-close upon submitting
  }

  const whichClose = () => {
    if(levelProp) {
      handleEditClose();
    } else {
      addModalHide();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input name="name" value={level.name} onChange={handleChange} />
        <p>Measurement</p>
        <input name="measurement" value={level.measurement} onChange={handleChange} />
        <p>Reps</p>
        <input name="reps" value={level.reps} onChange={handleChange} />
        <p>Time Frame</p>
        <input name="timeframe" value={level.timeframe} onChange={handleChange} />
        <p>Sets</p>
        <input name="sets" value={level.sets} onChange={handleChange} />
        <br />
        <Button variant='primary' type='submit'>submit</Button>  
        <Button variant='danger' onClick={whichClose}>cancel</Button>
      </form>
    </>
  )
}
export default LevelForm;
