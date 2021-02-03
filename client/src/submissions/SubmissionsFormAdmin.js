import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Axios from "axios"
import Comments from "../components/Comments"
import { Button, Form } from "react-bootstrap"
import styled from 'styled-components'

const SubmissionsFormAdmin = () => {
  const { submission_id } = useParams()
  const [submission, setSubmission] = useState({})
  const [checked, setChecked] = useState(false)
  const [submissionState, setSubmissionState] = useState(submission)
  const [user, setUser] = useState({})

  useEffect(()=>{
    getSubmission()
  },[])

  useEffect(() => {
    if (submission) {
      getUser()
    }
  }, [submission])

  const getUser = async () => {
    try {
      let res = await Axios.get(`/api/users/${submission.user_id}`)
      setUser(res.data)
    } catch (error) {
      console.log(error)
    }
  }

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
      alert(`You have changed this submission to ${submissionState.status}`)
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
      <UserName>
        <h1>{user.first_name} {user.last_name}</h1>
      </UserName>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        <Video>
          <video style={{ width: '400px', height: '300px' }} controls="true" class="embed-responsive-item">
            <source src={submissionState.video_upload} type="video/mp4" />
          </video>
        </Video>
        <AdminFeedback>
          <AdminFeedbackForm>
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
          </AdminFeedbackForm>
          <AdminFeedbackForm>
            <Comments submission_id = {submission_id}/>
          </AdminFeedbackForm>
        </AdminFeedback>
      </div>
    </>
  )
}

const AdminFeedbackForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-self: center;
border: 2px solid #D6D6D6;
height: 50%;
overflow: auto;
width: 90%;
margin: 25px;
padding: 25px;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const UserName = styled.div`
margin: auto;
margin-top: 25px;
margin-bottom 25px;
display: flex;
justify-content: center;
align-items: center;
`

const Video = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
align-content: center;
flex-grow: 1
`

const AdminFeedback = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
align-content: center;
flex-grow: 1;
`

export default SubmissionsFormAdmin
