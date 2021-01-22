import SubmissionForm from "./SubmissionForm";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Submission = ({
  submissionProp,
  editCalledSubmission,
  deleteSubmission,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditShow = () => setShowEdit(true);
  const handleEditHide = () => setShowEdit(false);
  const handleDeleteShow = () => setShowDelete(true);
  const handleDeleteHide = () => setShowDelete(false);

  return (
    <>
      <div>
        <h3>{submissionProp.name}</h3>
        <p>{submissionProp.complete ? "completed" : "not completed"}</p>
        <div class="embed-responsive embed-responsive-16by9">
          <video controls="true" class="embed-responsive-item">
            <source src={submissionProp.video_upload} type="video/mp4" />
          </video>
        </div>

        <Button variant="primary" onClick={handleEditShow}>
          Edit
        </Button>
        <Modal show={showEdit} onHide={handleEditHide}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SubmissionForm
              submissionProp={submissionProp}
              editCalledSubmission={editCalledSubmission}
              handleEditHide={handleEditHide}
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>

        <Button variant="danger" onClick={handleDeleteShow}>
          Delete
        </Button>
        <Modal show={showDelete} onHide={handleDeleteHide}>
          <Modal.Header closeButton>
            <Modal.Title>Delete this level</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to Delete?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDeleteHide}>
              No
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteSubmission(submissionProp.id)}
            >
              Yes, delete.
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Submission;
