
import SubmissionForm from './SubmissionForm';
import { useState } from "react";

const Submission = ({submissionProp, editCalledSubmission, deleteSubmission}) => {


  const [showEditForm, setShowEditForm] = useState(false);

  const showEditFormToggle = () => {
    setShowEditForm(!showEditForm);
  };


  return (
    <>
      <div>
        <h3>{submissionProp.name}</h3>
        <p>{submissionProp.complete ? 'completed' : 'not completed'}</p>
        <h1>{submissionProp.videoUpload}</h1>
        {/* alright I think this works because you somehow connect showEditform to SubmissionForm with
            this little command thing down here (the &&). Then you define this prop here too. */}
        { showEditForm && <SubmissionForm submissionProp={submissionProp} editCalledSubmission={editCalledSubmission} /> }
        <button onClick={showEditFormToggle}>{showEditForm ? "Hide" : "Show"}</button>
        <button onClick={()=>deleteSubmission(submissionProp.id)}>🗑️</button>
      </div>
    </>
  )
};

export default Submission;