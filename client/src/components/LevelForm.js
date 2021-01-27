import { useState } from "react";
import axios from 'axios';
import { Button, Form } from "react-bootstrap";

const LevelForm = ({ levelProp, addLevel, exerciseID, editLevel, handleEditClose, addModalHide, editLevels }) =>{

  const [level, setLevel] = useState(
    levelProp ? {
      name: levelProp.name,
      metric: levelProp.metric,
      multiplier: levelProp.multiplier,
      measurement: levelProp.measurement,
      reps: levelProp.reps,
      timeframe: levelProp.timeframe,
      sets: levelProp.sets,
    }:
    {
      name:'',
      metric: '',
      multiplier: null,
      measurement:'',
      reps: null,
      timeframe: null,
      sets: null,
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
      whichClose();
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
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" placeholder='Your level name' value={level.name} onChange={handleChange} />
        <Form.Label>Multiplier</Form.Label>
        <Form.Control name='multiplier' placeholder='e.g. 2.0, 1.75, etc.' type='number' value={level.multiplier} onChange={handleChange} />
        <Form.Label>Metrics</Form.Label>
        <Form.Control name='metric' placeholder='e.g. pounds, calories, etc.' value={level.metric} onChange={handleChange}/>
        <Form.Label>Measurement</Form.Label>
        <Form.Control name="measurement" placeholder='e.g. bodyweight' value={level.measurement} onChange={handleChange} />
        <Form.Label>Reps</Form.Label>
        <Form.Control name="reps" type='number' placeholder ='e.g. reps of 10' value={level.reps} onChange={handleChange} />
        <Form.Label>Time Frame</Form.Label>
        <Form.Control name="timeframe" type='number' placeholder='e.g. 1 minute' value={level.timeframe} onChange={handleChange} />
        <Form.Label>Sets</Form.Label>
        <Form.Control name="sets" type='number' placeholder='e.g. 3 sets' value={level.sets} onChange={handleChange} />
        <Button variant='primary' type='submit'>submit</Button>  
        <Button variant='danger' onClick={whichClose}>cancel</Button>
      </Form>
    </>
  )
}
export default LevelForm;
