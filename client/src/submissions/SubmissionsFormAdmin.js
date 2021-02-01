import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"
import Comments from "../components/Comments"
import { Button, Form } from "react-bootstrap"

const SubmissionsFormAdmin = () => {
  const { submission_id } = useParams()
  const [submission, setSubmission] = useState({})
  const [checked, setChecked] = useState(false)
  const [submissionState, setSubmissionState] = useState(submission)

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
    e.preventDefault();
    // console.log(submission);
    try {
      let res = await Axios.put(`/api/update_submission_status/${submission.id}/${submission.user_id}`, submissionState);
      // console.log(submissionState) 
      console.log(res.data);
      // setSubmissionState(res);
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) =>{
    setSubmissionState({
      ...submissionState, [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Submission Id: {submission_id}</h1>
      <video style={{ width: '400px', height: '300px' }} controls="true" class="embed-responsive-item">
        <source src={submissionState.video_upload} type="video/mp4" />
      </video>
      <Form onSubmit={handleSubmit}>
        <Comments submission_id = {submission_id}/>
      </Form>

      <Form onSubmit={handleSubmit}>
        <Form.Label>Status</Form.Label>
        <Form.Control as='select' 
          name="status"
          value ={submissionState.status}
          onChange={handleChange}>
          <option>Choose an option...</option>
          <option>Pending</option>
          <option>Approved</option>
          <option >Not Approved</option>
        </Form.Control>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default SubmissionsFormAdmin
