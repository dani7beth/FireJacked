import { useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const SubmissionForm = ({
  submissionProp,
  addSubmission,
  editCalledSubmission,
  handleHide,
  handleEditHide,
  level_id,
  handleUserDashHide,
}) => {
  // const { level_id } = useParams();
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setMsg] = useState("");
  const [submission, setSubmission] = useState(
    submissionProp
      ? {
          name: submissionProp.name,
          status: submissionProp.status,
          completed: submissionProp.completed,
          video_upload: submissionProp.video_upload,
          level_id: level_id,
        }
      : {
          name: "",
          status: "Pending",
          completed: false,
          video_upload: null,
          level_id: parseInt(level_id),
        }
  );
  const onDrop = useCallback((acceptedFiles) => {
    setSubmission({ ...submission, video_upload: acceptedFiles[0] });
  }, []);

  const addCallSubmission = async () => {
    console.log(submission);
    let videoData = new FormData();
    videoData.append("completed", submission.completed);
    videoData.append("status", submission.status);
    videoData.append("name", submission.name);
    videoData.append("video_upload", submission.video_upload);
    videoData.append("level_id", submission.level_id);

    handleNoVideo();

    try {
      setLoading(true);
      let res = await axios.post(
        `/api/levels/${level_id}/submissions`,
        videoData
      );
      addSubmission(res.data);
      setLoading(false);
      whichHide();
    } catch (err) {
      handleError(err.response.data.errors);
      console.log(err)
      setLoading(false);
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
    console.log(submission);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (submissionProp) {
      editCalledSubmission(submissionProp.id, {
        name: submission.name,
        status: submissionProp.status,
        completed: submission.completed,
        video_upload: submission.video_upload,
        level_id: level_id,
      });
      whichHide();
      setLoading(false);
    } else {
      console.log(submission);
      // console.log shows submission is pending.
      addCallSubmission();
      setSubmission({
        name: "",
        status: "Pending",
        completed: false,
        video_upload: "",
        level_id: level_id,
      });
    }
  };

  const handleError = (err) => {
    setError(true);
    setMsg(err);
    console.log(submission.video_upload);
    setTimeout(() => {
      setError(false);
      return;
    }, 5000);
  };
  const handleNoVideo = () => {
    console.log(submission.video_upload)
    if (submission.video_upload == null) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        return;
      }, 5000);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ onDrop });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const whichHide = () => {
    if (submissionProp) {
      handleEditHide();
    } else {
      // handleHide();
      handleUserDashHide()

    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
      {loading ? (
          <>
            <Spinner animation="border"></Spinner>{" "}
            <p>Adding Your Submission...</p>
          </>
        ) : (
          ""
        )}
        {alert && <Alert variant={"danger"}>You must upload a video.</Alert>}
        {error && <Alert variant={"danger"}>{errMsg}</Alert>}
        <p>Video</p>
        <div {...getRootProps()}>
          <Form.Control {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>

        <Form.Label>Notes</Form.Label>
        <Form.Control
          name="name"
          value={submission.name}
          onChange={handleChange}
          as="textarea"
        />
        <Button type="submit">submit</Button>
        <Button variant="danger" onClick={whichHide}>
          cancel
        </Button>
      </Form>
      {/* <h1>user id is {user.id}</h1> */}
    </>
  );
};

export default SubmissionForm;
