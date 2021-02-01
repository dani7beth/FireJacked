import React from "react";
import { useState, useCallback } from "react";
import axios from "axios";
import Dropzone, { useDropzone } from "react-dropzone";
import { Alert, Button, Form, Spinner } from "react-bootstrap";

const ExerciseForm = ({
  exerciseProp,
  addExercise,
  editExercise,
  handleHide,
  handleEditHide,
  editExercises,
}) => {
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [exercise, setExercise] = useState(
    exerciseProp
      ? {
          name: exerciseProp.name,
          image: exerciseProp.image,
          how_to_video: exerciseProp.how_to_video,
          category: exerciseProp.category,
          activity: exerciseProp.activity,
          description: exerciseProp.description,
        }
      : {
          name: "",
          image:
            "https://visualhunt.com/photos/1/dumbbells-in-row-in-fitness-studio.jpg?s=s",
          how_to_video: "",
          category: "",
          activity: "",
          description: "",
        }
  );

  Dropzone.options = {
    autoProcessQueue: false,
  };

  const onDrop = useCallback((acceptedFiles) => {
    setExercise({ ...exercise, how_to_video: acceptedFiles[0] });
  }, []);

  const editCallExercise = async () => {
    let imageData = new FormData();
    imageData.append("image", exercise.image);
    imageData.append("name", exercise.name);
    imageData.append("how_to_video", exercise.how_to_video);
    imageData.append("category", exercise.category);
    imageData.append("activity", exercise.activity);
    imageData.append("description", exercise.description);

    try {
      let res = await axios.put(`/api/exercises/${exerciseProp.id}`, imageData);
      editExercise(res.data);
      editExercises(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addCallExercise = async () => {
    console.log(exercise);
    let imageData = new FormData();
    imageData.append("image", exercise.image);
    imageData.append("name", exercise.name);
    imageData.append("how_to_video", exercise.how_to_video);
    imageData.append("category", exercise.category);
    imageData.append("activity", exercise.activity);
    imageData.append("description", exercise.description);

    handleNoVideo();

    console.log(imageData);
    try {
      // debugger;
      setLoading(true);
      let res = await axios.post(`/api/exercises`, imageData);
      addExercise(res.data);
      console.log(res.data);
      whichClose();
      setLoading(false);
    } catch (err) {
      handleError(err.response.data.errors);
      console.log(err.response);
    }
  };

  const handleError = (err) => {
    setError(true);
    setMsg(err);
    setLoading(false);
    console.log(exercise.how_to_video)
    setTimeout(() => {
      setError(false);
      return;
    }, 5000);
  };
  const handleNoVideo = () => {
    if (exercise.how_to_video == null) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        return;
      }, 5000);
    }
  };
  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exerciseProp) {
      editCallExercise();
    } else {
      addCallExercise();
      setExercise({
        name: "",
        how_to_video: "",
        category: "",
        activity: "",
        description: "",
      });
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

  const whichClose = () => {
    if (exerciseProp) {
      handleEditHide();
    } else {
      handleHide();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <>
            <Spinner animation="border"></Spinner>{" "}
            <p>Adding Your Exercise...</p>
          </>
        ) : (
          ""
        )}
        {alert && <Alert variant={"danger"}>You must upload a video.</Alert>}
        {error && <Alert variant={'danger'}>{errMsg}</Alert>}
        <Form.Label>How To Video</Form.Label>
        <div {...getRootProps()}>
          <Form.Control {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          placeholder="Name of your exercise"
          value={exercise.name}
          onChange={handleChange}
        />
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={exercise.category}
          onChange={handleChange}
        >
          <option>Choose a category...</option>
          <option>Barbell Strength/Power</option>
          <option>KettleBell Strength/Power</option>
          <option>Cardio-Respiratory Power</option>
        </Form.Control>
        <Form.Label>Activity</Form.Label>
        <Form.Control
          name="activity"
          placeholder="e.g. Deadlift, BenchPress, etc."
          value={exercise.activity}
          onChange={handleChange}
        />
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={exercise.description}
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          submit
        </Button>
        <Button variant="danger" onClick={whichClose}>
          cancel
        </Button>
      </Form>
    </>
  );
};

export default ExerciseForm;
