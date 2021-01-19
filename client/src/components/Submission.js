
import SubmissionForm from './SubmissionForm';
import { useState } from "react";

const Submission = ({submissionProp, editCalledSubmission}) => {


  const [showEditForm, setShowEditForm] = useState(false);

  const showEditFormToggle = () => {
    setShowEditForm(!showEditForm);
  };

  // delete function

  return (
    <>
      <div>
        <h1>{submissionProp.name}</h1>
        <h1>{submissionProp.complete ? 'true' : 'false'}</h1>
        <h1>{submissionProp.videoUpload}</h1>
        {/* alright I think this works because you somehow connect showEditform to SubmissionForm with
            this little command thing down here (the &&). Then you define this prop here too. */}
        { showEditForm && <SubmissionForm submissionProp={submissionProp} editCalledSubmission={editCalledSubmission} /> }
        <button onClick={showEditFormToggle}>{showEditForm ? "Hide" : "Show"}</button>
      </div>
    </>
  )
};

export default Submission;