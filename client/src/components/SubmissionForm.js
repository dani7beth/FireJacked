import { useContext, useReducer, useState, } from "react";
import Axios from 'axios';
import { AuthContext } from "../providers/AuthProvider";
import { useParams } from 'react-router-dom';

const SubmissionForm = ({submissionProp, addSubmission}) =>{
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const [videoUpload, setVideoUpload] = useState('');

  const [submission, setSubmission] = useState(
    submissionProp ? {
      name: submissionProp.name,
      completed: submissionProp.image,
      videoUpload: submissionProp.howToVideo
    }:
    {
      name: '',
      completed: '',
      videoUpload: ''
    }
  )

  const { user } = useContext(AuthContext);

  // const {id} = useParams();

      {/* 
          Okay here are some notes about the crud actions and api calls.
          - We need to make it so ONLY Admins can toggle !completed
          - There are two routes to get to submission:
            /levels/id/submission, or /users/id/submission.
            We can go through either levels or users. So what if we use the 'levels' route 
            for things like adding, editing, etc. And then the 'users' route for an index
            where you can have a user see all of their own submissions.

            I think it could maybe work this way because the flow of the app will be
            sign in -> go find exercises -> choose a specific LEVEL -> make a submission.
              OR
            sign in -> go to user's info (like their programs, etc) -> then 'see all submissions'
      */}

      // we might need to pass level down as a prop in order to acces that id.

  const editCalledSubmission = (id) => {
    Axios.put(`/api/levels/${id}/submission/${submission.id}`, submission)
      .then((res) => {
        console.log(res.data)
        editSubmission(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault
    if (submissionProp) {
      editCalledSubmission({name: name, completed: completed, videoUpload: videoUpload});
    }
    else {
      addSubmission({name: name, completed: completed, videoUpload: videoUpload});
    }
    // hide form
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Video</p>
      <input name="videoUpload" value={videoUpload} onChange={(e) => setVideoUpload(e.target.value)} />
      <br/>
      <button type='submit'>submit</button>
    </form>
    <h1>user id is {user.id}</h1>
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

export default ExerciseForm; 