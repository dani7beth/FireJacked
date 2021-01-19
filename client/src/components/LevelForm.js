import { useState } from "react";
import axios from 'axios';

const LevelForm = ({ levelProp, addLevel, exerciseID, editLevel, setToggle}) =>{

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
        setToggle();
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
  }
  return (
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
      <button type='submit'>submit</button>
    </form>
  )
}
export default LevelForm;
