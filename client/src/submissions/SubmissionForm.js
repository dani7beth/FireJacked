import { useContext, useReducer, useState, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const SubmissionForm = ({
  submissionProp,
  addSubmission,
  editCalledSubmission,
  handleHide,
  handleEditHide,
}) => {
  const { level_id } = useParams();
  const { id } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
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
          status: 'Pending',
          completed: false,
          video_upload: "test url video",
          level_id: parseInt(level_id),
        }
  );
  const onDrop = useCallback((acceptedFiles) => {
    setSubmission({ ...submission, video_upload: acceptedFiles[0] });
  }, []);

  const addCallSubmission = async () => {
    if (submission.video_upload == null) {
      alert("cant be blank");
      return;
    }
    console.log(submission)
    let videoData = new FormData();
    videoData.append('completed', submission.completed);
    videoData.append('status', submission.status);
    videoData.append("name", submission.name);
    videoData.append("video_upload", submission.video_upload);
    videoData.append("level_id", submission.level_id);
    
    try {
      let res = await axios.post(`/api/levels/${level_id}/submissions`, videoData);
      addSubmission(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
    console.log(submission);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submissionProp) {
      editCalledSubmission(submissionProp.id, {
        name: submission.name,
        status: submission.status,
        completed: submission.completed,
        video_upload: submission.video_upload,
        level_id: level_id,
      });
    } else {
      console.log(submission);
      // console.log shows submission is pending.
      addCallSubmission();
      setSubmission({
        name: "",
        status: 'Pending',
        completed: false,
        video_upload: "",
        level_id: level_id,
      });
    }
    whichHide();
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
      handleHide();
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <p>Video</p>
        <div {...getRootProps()}>
          <Form.Control {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          <Form.Control
            name="video_upload"
            value={submission.video_upload}
            onChange={handleChange}
          />
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={submission.name} onChange={handleChange} />
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
