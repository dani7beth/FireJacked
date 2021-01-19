import { useEffect, useState } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"

const Comments = ({submission_id}) => {
  // const { submission_id } = useParams()

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState([])
  const [editComment, setEditComment] = useState(false)

  useEffect(()=>{
    getComments()
  },[])

  const getComments = async () => {
    try {
      // debugger
      let res = await Axios.get(`/api/submissions/${submission_id}/comments`)
      console.log(res.data)
      setComments(res.data)
    } catch (error) {
      console.log(error)
      return (
        <h1>It would appear there has been a grave error. </h1>
      )
    }
  }

  const handleSubmit = async () => {
    try {
      // debugger
      let res = await Axios.post(`/api/submissions/${submission_id}/comments`,{body:comment, submission_id:submission_id})
      console.log(res.data)
      setComments([res.data,...comments])
    } catch (error) {
      console.log(error)
      return (
        <h1>It would appear there has been a grave error. </h1>
      )
    }

  }



  return (
    <>
    <h1>Comments</h1>
    <form onSubmit={handleSubmit}>
      <input type = "textarea" onChange={(e)=>setComment(e.target.value)}/>
      <button type="submit">+</button>
    </form>
    {comments.map(c => editComment ? <input/> : <p onClick={()=>setEditComment(!editComment)}>{c.body}</p>)}
    </>

  )
}

export default Comments