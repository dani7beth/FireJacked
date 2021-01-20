import React from 'react';
import { useState, useContext, useCallback } from "react";
import axios from 'axios';
import { AuthContext, } from "../providers/AuthProvider"
import {useDropzone} from 'react-dropzone';

const ExerciseForm = ({ exerciseProp, addExercise, editExercise, showEditFormToggle}) =>{
//  const [name, setName] = useState('');
//  const [image, setImage] = useState('');
//  const [how_to_video, sethow_to_video] = useState('');
//  const [category, setCategory] = useState('');
//  const [activity, setActivity] = useState('');
//
  const Auth = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [exercise, setExercise] = useState(
    exerciseProp ? {
      name: exerciseProp.name,
      image: exerciseProp.image,
      how_to_video: exerciseProp.how_to_video,
      category: exerciseProp.category,
      activity: exerciseProp.activity,
    }:
    {
      name:'',
      image:'',
      how_to_video:'',
      category:'',
      activity:'',
    }
  )

  const editCallExercise = () => {
    axios.put(`/api/exercises/${exerciseProp.id}`, exercise)
      .then((res) => {
        console.log(res.data)
        editExercise(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const addCallExercise = (data) => {
    axios.post(`/api/exercises`, data)
    .then((res)=>{
      // console.log(data)
      addExercise(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  
  const handleChange = (e) => {
    setExercise({...exercise, [e.target.name]: e.target.value})
  }

  const onDrop = useCallback((acceptedFiles) =>{
    setImage(acceptedFiles[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(image == null){
      alert('cant be blank');
      return;
    }
    let data = new FormData();
    console.log(image);
    data.append('image', image);
    data.append('name', exercise.name)
    data.append('how_to_video', exercise.how_to_video)
    data.append('category', exercise.category)
    data.append('activity', exercise.activity)
    if (exerciseProp) {
      editCallExercise();
    }
    else {
      addCallExercise(data);
    }
  }
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop});
  const files = acceptedFiles.map(file => (
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
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      {/* <input name="image" value={exercise.image} onChange={handleChange} /> */}
      <p>How To Video</p>
      <input name="how_to_video" value={exercise.how_to_video} onChange={handleChange} />
      <p>Category</p>
      <input name="category" value={exercise.category} onChange={handleChange} />
      <p>Activity</p>
      <input name="activity" value={exercise.activity} onChange={handleChange} />
      <br />
      <button type='submit'>submit</button>
    </form>
  )
}
export default ExerciseForm;
