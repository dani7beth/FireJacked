import React, { useEffect, useState } from 'react';
import Submission from './Submission';
import SubmissionForm from './SubmissionForm';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Submissions = () => {

  const [submissions, setSubmissions] = useState([]);
  const [submission, setSubmission] = useState({});

  useEffect(() => {
    getSubmissions();  
  },[]);

  const {level_id} = useParams();

  const getSubmissions = async () => {
    try{
      let response = await Axios.get(`/api/levels/${level_id}/submissions`)
        console.log(response.data)
        setSubmissions(response.data)
    }
    catch(err) {
      console.log(err)
    }
}


  const addSubmission = (submission) => {
    Axios
      .post(`/api/levels/${level_id}/submissions`, submission)
      .then((res) => {
        console.log(submission)
        setSubmissions([submission, ...submissions])
      })
      .catch((err) => {
        console.log(err)
      })
  }



  const editCalledSubmission = (id, submissionObject) => {
    Axios.put(`/api/levels/${level_id}/submissions/${id}`, submissionObject)
      .then((res) => {
        console.log(res.data)
        let newSubmissions = submissions.map((s) => s.id !== id ? s : res.data)
        setSubmissions(newSubmissions)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteSubmission = (id) => {
    Axios.delete(`/api/levels/${level_id}/submissions/${id}`)
      .then((res) => {
        setSubmissions(submissions.filter((submission)=> submission.id !== id))
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  

  const renderSubmissions = () => {
    return (
      submissions.map((submission) => 
          <Submission 
            key={submission.id} 
            submissionProp={submission} 
            editCalledSubmission={editCalledSubmission} 
            deleteSubmission={deleteSubmission}
        />)
    )
  }

  return (
    <>
      <h2>Make a new submission</h2>
       <SubmissionForm addSubmission={addSubmission} />
       <h1>Here are all your submissions!</h1>
      {renderSubmissions()}
    </>  
  )
};

export default Submissions;