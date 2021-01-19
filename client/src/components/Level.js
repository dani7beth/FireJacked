import LevelForm from "./LevelForm";
import { useState, } from 'react';

const Level = ({ levelProp, deleteLevel, exerciseID}) => {
  const [ level, setLevel] = useState()
  const [ toggle, setToggle] = useState(false)

  const editLevel = (res) => {
    const newLevel = res;
    if(newLevel === levelProp.id) return setLevel(newLevel)
    else return levelProp
  }
 
  return (
    <>
      <h1>{levelProp.name}</h1>
      { toggle && <LevelForm setToggle={setToggle} editLevel={editLevel} levelProp={levelProp} exerciseID={exerciseID}/>}
      <button onClick={() => setToggle(!toggle)}>{toggle? "Close Form" : "Show Form"}</button>
      <button onClick={()=> deleteLevel(levelProp.id)}>Delete</button>
    </>
  )
}
export default Level;
