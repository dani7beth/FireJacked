import LevelForm from "./LevelForm";
import { useState, } from 'react';

const Level = ({ levelProp, deleteLevel}) => {
  const [ level, setLevel] = useState()
  const [ showEditLevelForm, setShowEditLevelForm] = useState(false)

  const editLevel = (res) => {
    const newLevel = res;
    if(newLevel === levelProp.id) return setLevel(newLevel)
    else return levelProp
  }

  const showEditLevelFormToggle = () => {
    setShowEditLevelForm(!showEditLevelForm)
  }
 
  return (
    <>
      <h1>{levelProp.name}</h1>
      { showEditLevelForm && <LevelForm showEditLevelFormToggle={showEditLevelFormToggle} editLevel={editLevel} levelProp={levelProp}/>}
      <button onClick={showEditLevelFormToggle}>{showEditLevelForm ? "Close Form" : "Show Form"}</button>
      <button onClick={()=> deleteLevel(levelProp.id)}>Delete</button>
      <Submission />
    </>
  )
}
export default Level;
