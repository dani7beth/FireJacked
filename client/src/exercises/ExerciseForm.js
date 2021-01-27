import React from "react";
import { useState, useContext, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";

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

    console.log(imageData);
    try {
      // debugger;
      let res = await axios.post(`/api/exercises`, imageData);
      addExercise(res.data);
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
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input name="name" value={exercise.name} onChange={handleChange} />
        <p>How To Video</p>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          
          <input name="how_to_video" value={exercise.how_to_video} onChange={handleChange} />
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
        <p>Category</p>
        <input
          name="category"
          value={exercise.category}
          onChange={handleChange}
        />
        <p>Activity</p>
        <input
          name="activity"
          value={exercise.activity}
          onChange={handleChange}
        />
        <br />
        <Button variant="primary" type="submit">
          submit
        </Button>
        <Button variant="danger" onClick={whichClose}>
          cancel
        </Button>
      </form>
    </>
  );
};

export default ExerciseForm;
