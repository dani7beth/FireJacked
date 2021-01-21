import { useContext, useReducer, useState, useCallback } from "react";
import Axios from 'axios';
import { AuthContext } from "../providers/AuthProvider";
import { useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
// import Uploader from "./Uploader";
// import {useDropzone} from 'react-dropzone';

const SubmissionForm = ({submissionProp, addSubmission, editCalledSubmission, handleHide, handleEditHide}) => {
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
      whichHide();
  }

  const handleChange = (e) => {
    setSubmission({...submission, [e.target.name]: e.target.value})
  }
  // const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop});
  // const files = acceptedFiles.map(file => (
  //  <li key={file.path}>
  //    {file.path} - {file.size} bytes
  //  </li>
  // ));

  const whichHide = () => {
    if(submissionProp){
      handleEditHide();
    } else {
      handleHide();
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={submission.name} onChange={handleChange} />
      <p>Video</p>
      <input name="videoUpload" value={submission.videoUpload} onChange={handleChange} />
      <br/>
      <Button type='submit'>submit</Button>
      <Button variant='danger' onClick={whichHide} >cancel</Button>
    </form>
    {/* <h1>user id is {user.id}</h1> */}
    </>
  )
}

export default SubmissionForm; 