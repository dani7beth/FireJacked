import { useState } from "react";
import Axios from 'axios';

const LevelForm = ({ levelProp, addLevel, editLevel, showEditFormToggle}) =>{
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [howToVideo, setHowToVideo] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');

  const [level, setLevel] = useState(
    levelProp ? {
      name: levelProp.name,
      image: levelProp.image,
      howToVideo: levelProp.howToVideo,
      category: levelProp.category,
      activity: levelProp.activity,
    }:
    {
      name:'',
      image:'',
      howToVideo:'',
      category:'',
      activity:'',
    }
  )

  const editCallLevel = () => {
    debugger;
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
  
  const handleSubmit = (e) => {
    e.prevent.default();
    debugger;
    if (levelProp) {
      editCallLevel({name: name, measurement: measurement, reps: reps, timeframe: timeframe, sets: sets});
    }
    else {
      addLevel({name: name, measurement: measurement, reps: reps, timeframe: timeframe, sets: sets});
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={level.name} onChange={(e) => setLevel(e.target.value)} />
      <p>Measurement</p>
      <input name="measurement" value={level.measurement} onChange={(e) => setMeasurement(e.target.value)} />
      <p>Reps</p>
      <input name="reps" value={level.reps} onChange={(e) => setReps(e.target.value)} />
      <p>Time Frame</p>
      <input name="timeframe" value={level.timeframe} onChange={(e) => setTimeframe(e.target.value)} />
      <p>Sets</p>
      <input name="sets" value={level.sets} onChange={(e) => setSets(e.target.value)} />
      <br />
      <button type='submit'>submit</button>
    </form>
  )
}
export default LevelForm;
