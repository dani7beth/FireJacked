import { useEffect, useState, } from 'react';
import { Button } from 'react-bootstrap';
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

  const handleStatus = async () => {
    setSubmissionState({ completed: !submissionState.completed });
    try {
      let res = await axios.put(`/api/levels/${submissionState.level_id}/submissions/${submissionState.id}`, submissionState);
      // this path will need to change to a custom route 
      console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  const getLevel = async () => {
    // debugger
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
      <p>{submissionState.completed ? 'not completed' : 'completed'}</p>
      <video style={{ width: '400px', height: '300px' }} controls="true" class="embed-responsive-item">
        <source src={submissionState.video_upload} type="video/mp4" />
      </video>
      <Button onClick={handleStatus}>Verify</Button>

      <button onClick={()=>setShowComments(!showComments)}>{showComments ? "Expand" : "Collapse"}</button>
        <br/>
        {showComments ? "" : <Comments submission_id = {submission.id}/>}
    </>
  )
}

export default SingleSubmissionUser;