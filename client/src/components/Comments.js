import { useEffect, useState } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"
import Comment from "./Comment"
import { Button, Modal } from "react-bootstrap"

const Comments = ({submission_id}) => {
  // const { submission_id } = useParams()

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const [addShow, setAddShow] = useState(false);

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);
  

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // debugger
      let res = await Axios.post(`/api/submissions/${submission_id}/comments`,{body:comment, submission_id:submission_id})
      console.log(res.data)
      setComments([res.data,...comments])
      setComment("")
      handleAddClose();
    } catch (error) {
      console.log(error)
      return (
        <h1>It would appear there has been a grave error. </h1>
      )
    }

  }

  const editSingleComment = async (id, object) => {
    try {
      // debugger
      let res = await Axios.put(`/api/submissions/${submission_id}/comments/${id}`,object)
      console.log(res.data)
      let newComments = comments.map(c => c.id !== id ? c : res.data)
      setComments(newComments)
    } catch (error) {
      console.log(error)
      return (
        <h1>It would appear there has been a grave error. </h1>
      )
    }

  }

  const removeComment = async(id) => {
    try {
      // debugger
      let res = await Axios.delete(`/api/submissions/${submission_id}/comments/${id}`)
      console.log(res.data)
      let newComments = comments.filter(c => c.id !== id)
      setComments(newComments)
      
    } catch (error) {
      console.log(error)
      return (
        <h1>It would appear there has been a grave error. </h1>
      )
    }
  }

{/* <form onSubmit={handleSubmit}>
      <textarea value = {comment} type = "textarea" onChange={(e)=>setComment(e.target.value)}/>
      <button type="submit">+</button>
    </form> */}


  return (
    <>
    <h1>Comments</h1>
          <Button variant="primary" size='sm' onClick={handleAddShow}>
            Add comment
          </Button>
          <Modal show={addShow} onHide={handleAddClose}>
            <Modal.Header closeButton>
              <Modal.Title>What would you like to say?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                  <form onSubmit={handleSubmit}>
                  <textarea value = {comment} type = "textarea" onChange={(e)=>setComment(e.target.value)}/>  
                  <br />
                  <Button type='submit' variant='primary' size='sm'>submit changes</Button>
                  <Button variant="secondary" size='sm' onClick={handleAddClose}>Go back</Button>
                </form>
            </div>
            </Modal.Body>
          </Modal>
    {comments.map(c => <Comment key={c.id}{...c} submission_id={submission_id} editSingleComment={editSingleComment} removeComment={removeComment}/>)}
    </>

  )
}

export default Comments