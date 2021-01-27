import { useState, } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const SingleSubmissionUser = ({submission}) =>{
  const [submissionState, setSubmissionState] = useState(submission)
  console.log(submissionState);

  const handleStatus = async () =>{
    setSubmissionState({completed: !submissionState.completed});
    try {
      let res = await axios.put(`/api/levels/${submissionState.level_id}/submissions/${submissionState.id}`, submissionState);
      // this path will need to change to a custom route 
      console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      <h1>{submissionState.name}</h1>
        <p>{submissionState.user_id}</p>
        <p>{submissionState.completed ? 'not completed' : 'completed'}</p>
        {/* how do i render {submissionState.video_upload}? */}
        <video style={{ width: '400px', height: '300px' }} controls="true" class="embed-responsive-item">
          <source src={submissionState.video_upload} type="video/mp4" />
        </video>
        <Button onClick={handleStatus}>Verify</Button>
        
    </>
  )
  

}
export default SingleSubmissionUser;