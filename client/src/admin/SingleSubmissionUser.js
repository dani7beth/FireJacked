import { useEffect, useState, } from 'react';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';
import Comments from '../components/Comments';

const SingleSubmissionUser = ({submission}) =>{
  const [submissionState, setSubmissionState] = useState(submission)
  const [level, setLevel] = useState(null)
  const [exercise, setExercise] = useState(null)
  const [levelLoading, setLevelLoading] = useState(true)
  const [exerciseLoading, setExerciseLoading] = useState(true)
  const [showComments, setShowComments] = useState(true)

  useEffect(() => {
    if (submission){
      getLevel()
    }
  }, [submission])
 
  useEffect(() => {
    if (level) {
      getExercise() 
    }
  }, [level])

  const handleChange = (e) =>{
    setSubmissionState({
      ...submissionState, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    // console.log(submission);
    try {
      let res = await axios.put(`/api/update_submission_status/${submission.id}/${submission.user_id}`, submissionState);
      // console.log(submissionState) 
      console.log(res.data);
      // setSubmissionState(res);
    } catch (error) {
      console.log(error)
    }
  }
  
  // const handleStatus = async (e) => {
  //   setSubmissionState({ status: e.target.value });
  //   console.log(submission);
  //   try {
  //     let res = await axios.put(`/api/levels/${submission.level_id}/submissions/${submission.id}`, submissionState);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getLevel = async () => {
    try {
      let res = await axios.get(`/api/levels/${submission.level_id}`)
      setLevel(res.data)
      setLevelLoading(false)
      console.log("level: ", res.data)
    } catch (error) {
      console.log(error)

    }
  }

  const getExercise = async () => {
    try {
      let res = await axios.get(`/api/exercises/${level.exercise_id}`)
      setExercise(res.data)
      setExerciseLoading(false)
      console.log("exercise: ", res.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (levelLoading || exerciseLoading){
    return <h1>Loading</h1>
  }

  return (
    <>
      <h1>{submissionState.name}</h1>
      <h4>{level.name}</h4>
      <h4>{exercise.activity}</h4>
      <p>{submissionState.status}</p>
      <video style={{ width: '400px', height: '300px' }} controls="true" class="embed-responsive-item">
        <source src={submissionState.video_upload} type="video/mp4" />
      </video>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Status</Form.Label>
        <Form.Control as='select' 
          name="status"
          value ={submissionState.status}
          onChange={handleChange}>
          <option>Pending</option>
          <option>Approved</option>
          <option >Not Approved</option>
        </Form.Control>
        <Button type='submit'>Submit</Button>
        
      </Form>


      <button onClick={()=>setShowComments(!showComments)}>{showComments ? "Expand" : "Collapse"}</button>
        <br/>
        {showComments ? "" : <Comments submission_id = {submission.id}/>}
    </>
  )
}

export default SingleSubmissionUser;