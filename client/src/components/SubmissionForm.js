import { useContext, useReducer, useState, } from "react";
import Axios from 'axios';
import { AuthContext } from "../providers/AuthProvider";
import { useParams } from 'react-router-dom';

const SubmissionForm = ({submissionProp, addSubmission, editCalledSubmission}) => {
  // const [name, setName] = useState('');
  // const [completed, setCompleted] = useState(false);
  // const [videoUpload, setVideoUpload] = useState('');

  const {level_id} = useParams();
  const { id } = useContext(AuthContext);

  const [submission, setSubmission] = useState(
    submissionProp ? {
      name: submissionProp.name,
      completed: submissionProp.completed,
      videoUpload: submissionProp.videoUpload,
      level_id: level_id
    }:
    {
      name: '',
      completed: false,
      videoUpload: '',
      level_id: parseInt(level_id)
    }
  )
        // use this for populating the editForm



  

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (submissionProp) {
  //     editCalledSubmission(submissionProp.id, {name: name, completed: completed, videoUpload: videoUpload, level_id:level_id});
  //   }
  //   else {
  //     addSubmission({name: name, completed: completed, videoUpload: videoUpload, level_id:level_id});
  //     // setSubmission({
  //     //   name: '',
  //     //   completed: false,
  //     //   videoUpload: ''
  //     // })
  //       // how to make the form empty after I submit it??
  //   }
  //   // hide form
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (submissionProp) {
      editCalledSubmission(submissionProp.id, {name: submission.name, completed: submission.completed, video_upload: submission.videoUpload, level_id: level_id});
    }
    else {
      addSubmission(submission);
      setSubmission({
        name: '',
        completed: false,
        videoUpload: '',
        level_id: level_id
      })
    }
  }

  const handleChange = (e) => {
    setSubmission({...submission, [e.target.name]: e.target.value})
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={submission.name} onChange={handleChange} />
      <p>Video</p>
      <input name="videoUpload" value={submission.videoUpload} onChange={handleChange} />
      <br/>
      <button type='submit'>submit</button>
    </form>
    {/* <h1>user id is {user.id}</h1> */}
    </>
  )
}

{/*
        <p>Completed (only trainers can change this!) </p>
        <input type='checkbox' name="completed" value={completed} onChange={(e) => setCompleted(!completed)} />

            Do I need to do this toggle differntly? Maybe instead of onChange its this

        <input type='checkbox' name="completed" value={completed} onClick=toggleCompleted() />
        
            with this function

        const ToggleCompleted = () => {
          setCompleted(!completed);
        };

*/}

export default SubmissionForm; 