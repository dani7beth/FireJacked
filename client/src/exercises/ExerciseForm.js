import React from "react";
import { useState, useContext, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { useDropzone } from "react-dropzone";

const ExerciseForm = ({
  exerciseProp,
  addExercise,
  editExercise,
  showEditFormToggle,
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
        image: "",
        how_to_video: "",
        category: "",
        activity: "",
      }
  );

  const onDrop = useCallback((acceptedFiles) => {
    setExercise({image: acceptedFiles[0]});
  }, []);

  const editCallExercise = () => {
    axios
      .put(`/api/exercises/${exerciseProp.id}`, exercise)
      .then((res) => {
        console.log(res.data);
        editExercise(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCallExercise = async () => {
    debugger

    if (exercise.image == null) {
      alert("cant be blank");
      return;
    }

    let imageData = new FormData();
    
    imageData.append("image", exercise.image);
    imageData.append("name", exercise.name);
    imageData.append("how_to_video", exercise.how_to_video);
    imageData.append("category", exercise.category);
    imageData.append("activity", exercise.activity);

    console.log(imageData);
    try {
      let res = await axios.post(`/api/exercises`, imageData);
    } catch (err) {
      console.log(err)
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

  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={exercise.name} onChange={handleChange} />
      <p>Image</p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        <input name="image" value={exercise.image} onChange={handleChange} />
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <p>How To Video</p>
      <input
        name="how_to_video"
        value={exercise.how_to_video}
        onChange={handleChange}
      />
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
      <button type="submit">submit</button>
    </form>
  );
};

export default ExerciseForm;
