import { useContext, useReducer, useState, useCallback } from "react";
import Axios from 'axios';
import { AuthContext } from "../providers/AuthProvider";
import { useParams } from 'react-router-dom';
// import Uploader from "./Uploader";
// import {useDropzone} from 'react-dropzone';

const SubmissionForm = ({submissionProp, addSubmission, editCalledSubmission}) => {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const [videoUpload, setVideoUpload] = useState('');

  const [submission, setSubmission] = useState(
    submissionProp ? {
      name: submissionProp.name,
      completed: submissionProp.completed,
      videoUpload: submissionProp.videoUpload
    }:
    {
      name: '',
      completed: false,
      videoUpload: ''
    }
  )



  const { id } = useContext(AuthContext);

  const {level_id} = useParams();
  // I can also do match.params.id, but I hvae to pass match at the top of this whole function??

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

//   const onDrop = useCallback((acceptedFiles) => {
//     setImage(acceptedFiles[0]);
//   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submissionProp) {
      editCalledSubmission(submissionProp.id, { name: name, completed: completed, videoUpload: videoUpload, level_id: level_id });
    }
    else {
      addSubmission({ name: name, completed: completed, videoUpload: videoUpload, level_id: level_id });
      setSubmission({
        name: '',
        completed: false,
        videoUpload: ''
      })
    }
    // hide form
  }
  // const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop});
  // const files = acceptedFiles.map(file => (
  //  <li key={file.path}>
  //    {file.path} - {file.size} bytes
  //  </li>
  // ));
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
        {/*<p>Video</p>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>*/}
        <input name="videoUpload" value={videoUpload} onChange={(e) => setVideoUpload(e.target.value)} />
        <br />
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