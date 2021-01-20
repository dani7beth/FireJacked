import { useState } from "react"


const Comment = ({body, editSingleComment, id, submission_id, removeComment}) => {

  const [editComment, setEditComment] = useState(false)
  const [newBody, setNewBody] = useState(body)

  const handleSubmit=(e)=>{
    e.preventDefault()
    editSingleComment(id, {body:newBody, submission_id:submission_id})
    setEditComment(!editComment)
  }

  
  if (editComment){
    return(
      <form onSubmit={handleSubmit}>
        <input value ={newBody} onChange={(e)=>setNewBody(e.target.value)}/> 
      </form>
    )}

    return(
      <>
        <p onClick={()=>setEditComment(!editComment)}>{body}</p>
        <button onClick={()=>removeComment(id)}>Delete</button>
      </>
    )
  
}

export default Comment