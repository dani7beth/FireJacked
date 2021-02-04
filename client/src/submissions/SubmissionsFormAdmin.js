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
  const [level, setLevel] = useState({})
  const [exercise, setExercise] = useState({})

  useEffect(()=>{
    getSubmission()
  },[])

  useEffect(() => {
    if (submission) {
      getUser()
    }
  }, [submission])

  useEffect(() => {
    if (submission) {
      getLevel() 
    }
  }, [submission])

  useEffect(() => {
    if (level) {
      getExercise();
    }
  }, [level]);

  const getExercise = async () => {
    try {
      let res = await Axios.get(`/api/exercises/${level.exercise_id}`);
      setExercise(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getLevel = async () => {
    try {
      let res = await Axios.get(`/api/levels/${submission.level_id}`);
      setLevel(res.data)
    } catch (error) {
      console.log(error)
    }
  }

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

  let formattedDate = new Date(submission.created_at)
  let date = formattedDate.toLocaleDateString("US-en")

  let outcome = level.multiplier * user.weight
  let minute = Math.floor(level.timeframe/60)
  let seconds = level.timeframe%60 < 10 ? "0" + level.timeframe%60 : level.timeframe%60
  let duration = minute + ":" + seconds

  return (
    <>
      <UserName>
        <h1>{user.first_name} {user.last_name}</h1>
      </UserName>

      <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", margin: "30px"}}>

        <AdminFeedback>
        <AdminFeedbackForm>
            <HowToVideo controls={true} src={submission.video_upload}/>
          </AdminFeedbackForm>
          <AdminFeedbackForm>
            <Form onSubmit={handleSubmit} style={{borderRadius:'10px', width:'182px'}}>
              <Form.Label as="h1">{exercise.activity}</Form.Label>
              <Form.Label as="h3">{date}</Form.Label>
              <Form.Label as="p"> 
                {level.name} {" | "} 
                {level.measurement ==="Bodyweight" ? `${outcome} ${level.metric}` : ""} {" | "}
                Timeframe: {duration}{" | "}
                Reps: {level.reps}{" | "}
                Sets: {level.sets}{" | "}
              </Form.Label>
              <Form.Control as='select' 
                name="status"
                value ={submissionState.status}
                onChange={handleChange}>
                <option>Choose an option...</option>
                <option>Pending</option>
                <option>Approved</option>
                <option >Not Approved</option>
              </Form.Control>
              <Button type='submit' style={{marginTop:"10px", backgroundColor:'#f4731f', border:'1px solid #f4731f'}}>Submit</Button>
            </Form>
          </AdminFeedbackForm>
          
        </AdminFeedback>

       {/* <div style={{alignSelf:"start"}}> */}
        <Comments submission_id = {submission_id} />
      {/* </div> */}
      </div>
    </>
  )
}

const AdminFeedbackForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-self: center;
// border: 2px solid #D6D6D6;
width: 100%;
margin-bottom: 25px;
padding: 25px;
`

const UserName = styled.div`
margin: auto;
margin-top: 25px;
margin-bottom 25px;
display: flex;
justify-content: center;
align-items: center;
`

// const Video = styled.div`
// display: flex;
// // align-items: flex-start;
// // justify-content: center;

// `

export const HowToVideo = styled.video`
  max-width: 500px;
  border-radius:10px;
  align-self: center;
  flex-grow: 1;
`

const AdminFeedback = styled.div`
display: flex;
flex-direction: row;
align-items: start;
justify-items: space-between;
align-content: center;
flex-grow: 1;
// margin:25px;
`

export default SubmissionsFormAdmin
