import React from "react";
import { useState, useContext, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, Form } from "react-bootstrap";

const ExerciseForm = ({
  exerciseProp,
  addExercise,
  editExercise,
  handleHide,
  handleEditHide,
  editExercises,
}) => {
  const Auth = useContext(AuthContext);
  const [exercise, setExercise] = useState(
    exerciseProp
      ? {
          name: exerciseProp.name,
          image: exerciseProp.image,
          how_to_video: exerciseProp.how_to_video,
          category: exerciseProp.category,
          activity: exerciseProp.activity,
        }
      : {
          name: "",
          image: 'https://visualhunt.com/photos/1/dumbbells-in-row-in-fitness-studio.jpg?s=s',
          how_to_video: "",
          category: "",
          activity: "",
        }
  );

  Dropzone.options = {
    autoProcessQueue: false
  }

  const onDrop = useCallback((acceptedFiles) => {
      setExercise({...exercise, how_to_video: acceptedFiles[0] })
  }, []);

  const editCallExercise = async () => {
    if(exercise.how_to_video == null){
      alert('cant be blank');
      return;
    }
    let imageData = new FormData();
    imageData.append("image", exercise.image);
    imageData.append("name", exercise.name);
    imageData.append("how_to_video", exercise.how_to_video);
    imageData.append("category", exercise.category);
    imageData.append("activity", exercise.activity);

    try {
      let res = await axios.put(`/api/exercises/${exerciseProp.id}`, imageData);
      editExercise(res.data);
      editExercises(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addCallExercise = async () => {
    if (exercise.how_to_video == null) {
      alert("cant be blank");
      return;
    }
    console.log(exercise);
    let imageData = new FormData();
    imageData.append('image', exercise.image);
    imageData.append("name", exercise.name);
    imageData.append("how_to_video", exercise.how_to_video);
    imageData.append("category", exercise.category);
    imageData.append("activity", exercise.activity);
    imageData.append('description', exercise.description);

    console.log(imageData);
    try {
      // debugger;
      let res = await axios.post(`/api/exercises`, imageData);
      addExercise(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
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
      });
    }
    whichClose();
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
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" placeholder='Name of your exercise' value={exercise.name} onChange={handleChange} />
        <Form.Label>How To Video</Form.Label>
        <div {...getRootProps()}>
          <Form.Control {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          
          <Form.Control name="how_to_video" value={exercise.how_to_video} onChange={handleChange} />
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
        <Form.Label>Category</Form.Label>
        <Form.Control as='select' name='category' value={exercise.category} onChange={handleChange}>
          <option>Choose a category...</option>
          <option>Barbell Strength/Power</option>
          <option>KettleBell Strength/Power</option>
          <option>Cardio-Respiratory Power</option>
        </Form.Control>
        <Form.Label>Activity</Form.Label>
        <Form.Control
          name="activity"
          placeholder='e.g. Deadlift, BenchPress, etc.'
          value={exercise.activity}
          onChange={handleChange}
          />
        <Form.Label>Description</Form.Label>
        <Form.Control as='textarea' name='description' value={exercise.description} onChange={handleChange}/>
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
