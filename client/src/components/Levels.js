import { useEffect, useState } from "react";
import axios from "axios";

const Levels = (exercise) => {
  const [levels, setLevels] = useState([]);

  const getLevels = (exercise) => {
    axios
      .get(`/api/exercises/${exercise.id}/levels`)
      .then((response) => {
        setLevels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addLevel = (exercise, level) => {
    axios.post(`/api/exercises/${exercise.id}/levels`, level )
    .then((res)=>{
      console.log(level)
      setLevels([level, ...levels])
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  useEffect(() => {
    getLevels();
  }, []);
    
  const deleteLevel = (id) => {
    axios.delete(`/api/exercises/${exercise.id}/levels/${id}`)
      .then((res) => {
        setLevels(levels.filter((level)=> level.id !== id))
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error in delete level");
      })
  }

  const renderLevels = () => {
    return levels.map((level) => (
      <Level key={level.id} levelProp={level} deleteLevel={deleteLevel}/>
    ))
  }
  
  return (
    <>
      <h1>levels</h1>
      <LevelForm addLevel={addLevel}/>
      {renderLevels()}
    </>
  );
};

export default Levels;
