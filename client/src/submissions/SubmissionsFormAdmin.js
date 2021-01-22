import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"
import Comments from "../components/Comments"
import { Button } from "react-bootstrap"

const SubmissionsFormAdmin = () => {

  const { submission_id } = useParams()

  const [submission, setSubmission] = useState({})
  const [checked, setChecked] = useState(false)

  useEffect(()=>{
    getSubmission()
  },[])

  const getSubmission = async () => {
    try {
      // debugger
      let res = await Axios.get(`/api/single_submission/${submission_id}`)
      console.log(res.data)
      setSubmission(res.data)
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
      let res = await Axios.put(`/api/update_submission/${submission_id}/${submission.user_id}`,{
        name:submission.name, 
        video_upload:submission.video_upload, 
        completed:checked, 
        level_id:submission.level_id
      })
      console.log(res.data)
      setSubmission({
        name:submission.name, 
        video_upload:submission.video_upload, 
        completed:res.data, 
        level_id:submission.level_id
      })
    } catch (error) {
      console.log(error)
      return (
        <h1>It would appear there has been a grave error. </h1>
      )
    }
  }

   
  return (
  <>
  <h1>Submission Id: {submission_id}</h1>
  <h2>Name: {submission.name}</h2>
  <h2>video upload: {submission.video_upload}</h2>
  <form onSubmit={handleSubmit}>
  <input type="checkbox" defaultChecked={submission.completed} onChange={()=> setChecked(submission.completed ? false : true)}/>
  <Button type="submit" size='sm'>Submit</Button>
  </form>
  <Comments submission_id = {submission_id}/>

  </>


  
  )
}

export default SubmissionsFormAdmin