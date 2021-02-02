import SubmissionForm from "./SubmissionForm";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Submission = ({
  submissionProp,
  editCalledSubmission,
  deleteSubmission,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [comments, setComments] = useState([]);
  const handleEditShow = () => setShowEdit(true);
  const handleEditHide = () => setShowEdit(false);
  const handleDeleteShow = () => setShowDelete(true);
  const handleDeleteHide = () => setShowDelete(false);

  

  return (
    <>
      <Row>
        <Col>
          <div>
            <video style={{width:'400px', height:'300px'}} controls="true" class="embed-responsive-item">
              <source src={submissionProp.video_upload} type="video/mp4" />
            </video>
          </div>
          <h3>{submissionProp.name}</h3>
          <p>{submissionProp.status}</p>
          <Button variant="primary" onClick={handleEditShow}>Edit</Button>
          <Button variant="danger" onClick={handleDeleteShow}>Delete</Button>
        </Col>
        <Col>
        <br /><br />
        <div style={{border:'2px solid', paddingTop:'15px', height:'230px'}}>
          {/* {renderComments()} */}
        </div>
        </Col>
      </Row>
        


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
    </>
  );
};

export default Submission;
