import React, { useEffect, useState } from "react";
import Submission from "./Submission";
import SubmissionForm from "./SubmissionForm";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Button, Modal } from "react-bootstrap";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  useEffect(() => {
    getSubmissions();
  }, []);

  const { level_id } = useParams();

  const getSubmissions = async () => {
    try {
      let response = await Axios.get(`/api/levels/${level_id}/submissions`);
      console.log(response.data);
      setSubmissions(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addSubmission = (submission) => {
    setSubmissions([submission, ...submissions]);
  };

  const editCalledSubmission = (id, submissionObject) => {
    Axios.put(`/api/levels/${level_id}/submissions/${id}`, submissionObject)
      .then((res) => {
        console.log(res.data);
        let newSubmissions = submissions.map((s) =>
          s.id !== id ? s : res.data
        );
        setSubmissions(newSubmissions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSubmission = (id) => {
    Axios.delete(`/api/levels/${level_id}/submissions/${id}`)
      .then((res) => {
        setSubmissions(
          submissions.filter((submission) => submission.id !== id)
        );
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderSubmissions = () => {
      return submissions.map((submission) => (
        <Submission
          key={submission.id}
          submissionProp={submission}
          editCalledSubmission={editCalledSubmission}
          deleteSubmission={deleteSubmission}
        />
      ));
    
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make a submission
      </Button>
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SubmissionForm
            addSubmission={addSubmission}
            handleHide={handleHide}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <h1>
        {submissions.length === 0
          ? "Please add a submission"
          : "Here are your submissions"}
      </h1>
      <hr />
      {renderSubmissions()}
    </>
  );
};

export default Submissions;
