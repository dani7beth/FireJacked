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
    Axios.put(`/api/levels/${level_id}/submission/${id}`, submissionObject)
      .then((res) => {
        console.log(res.data)
        setSubmission(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  

  const renderSubmissions = () => {
    return submissions.map((submission) => <Submission key={submission.id} submissionProp={submission} editCalledSubmission={editCalledSubmission} />)
  }

  return (
    <>
      <h1>Make a new submission</h1>
       <SubmissionForm addSubmission={addSubmission} />
       <h3>Here are all your submissions!</h3>
      {renderSubmissions()}
    </>
  )
};

export default Submissions;