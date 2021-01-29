import React, { useEffect, useState } from "react";
import Submission from "./Submission";
import SubmissionForm from "./SubmissionForm";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { Button, Modal } from "react-bootstrap";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [show, setShow] = useState(false);
  const [level, setLevel] = useState({});
  const [exercise, setExercise] = useState({});

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  useEffect(() => {
    getSubmissions();
  }, []);

  useEffect(() => {
    if(submissions){
      getLevel()
    }
  },[submissions])

  useEffect(() => {
    if(level){
      getExercise()
    }
  },[level])

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

  const getLevel = async () => {
    try {
      let res = await Axios.get(`/api/levels/${level_id}`)
      setLevel(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getExercise = async () => {
    try {
      let res = await Axios.get(`/api/exercises/${level.exercise_id}`)
      setExercise(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addSubmission = (submission) => {
    setSubmissions([submission, ...submissions]);
  };

  const editCalledSubmission = (id, submission) => {
    let videoData = new FormData();
    videoData.append("completed", submission.completed);
    videoData.append("name", submission.name);
    videoData.append("video_upload", submission.video_upload);
    videoData.append("level_id", submission.level_id);

    Axios.put(`/api/levels/${level_id}/submissions/${id}`, videoData)
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
      <Link to={`/showexercise/${exercise.id}`}>
        <Button variant="secondary">Go to exercise</Button>
      </Link>
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
