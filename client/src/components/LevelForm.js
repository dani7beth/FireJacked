import { useState } from "react";
import Axios from 'axios';

const LevelForm = ({ levelProp, addLevel, editLevel, showEditFormToggle}) =>{

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
    Axios.put(`/api/levels/${levelProp.id}`, level)
      .then((res) => {
        console.log(res.data)
        editLevel(res.data)
        showEditFormToggle();
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  const handleChange = (e) => {
    setLevel({...level, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.prevent.default();
    if (levelProp) {
      editCallLevel();
    }
    else {
      addLevel();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={level.name} onChange={(e) => setLevel(handleChange)} />
      <p>Measurement</p>
      <input name="measurement" value={level.measurement} onChange={(e) => setLevel(handleChange)} />
      <p>Reps</p>
      <input name="reps" value={level.reps} onChange={(e) => setLevel(handleChange)} />
      <p>Time Frame</p>
      <input name="timeframe" value={level.timeframe} onChange={(e) => setLevel(handleChange)} />
      <p>Sets</p>
      <input name="sets" value={level.sets} onChange={(e) => setLevel(handleChange)} />
      <br />
      <button type='submit'>submit</button>
    </form>
  )
}
export default LevelForm;
