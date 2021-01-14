import react, { useState } from 'react';
import Submission from './Submission';
import SubmissionForm from './SubmissionForm';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Submissions = () => {

  const [submissions, setSubmissions] = useState([]);

  // const {id} = useParams();

  const getSubmissions = (match) => {
    Axios
      .get(`/api/levels/${match.params.id}/submissions`)
      .then((response) => {
        console.log(response.data)
        setSubmissions(response.data)
      })
      .catch((err) => {
        console.log(err)
      }
  )}

  const addSubmission = (match, submission) => {
    Axios
      .post(`/api/levels/${match.params.id}/submissions`, submission)
      .then((res) => {
        console.log(submission)
        setSubmissions(submission, ...submissions)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  useEffect (() => {
    getSubmissions();
  }, []);

  const renderSubmissions = () => {
    return submissions.map((submission) => (
      // <h1>{submission.name}</h1>
      <Submission key={submission.id} submissionProp={submission} />
    ))
  }

  return (
    <>
      <h1>submissions here</h1>
       <SubmissionForm addSubmission={addSubmission}/>
      {renderSubmissions()}
    </>
  )
};

export default Submissions;