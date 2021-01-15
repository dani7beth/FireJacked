import { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext, } from "../providers/AuthProvider"

const ExerciseForm = ({ exerciseProp, addExercise, editExercise, showEditFormToggle}) =>{
//  const [name, setName] = useState('');
//  const [image, setImage] = useState('');
//  const [how_to_video, sethow_to_video] = useState('');
//  const [category, setCategory] = useState('');
//  const [activity, setActivity] = useState('');
//
  const Auth = useContext(AuthContext);

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


  const addCallExercise = () => {
    debugger;
    axios.post(`/api/exercises`, exercise )
    .then((res)=>{
      console.log(exercise)
      addExercise(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  
  const handleChange = (e) => {
    setExercise({...exercise, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (exerciseProp) {
      editCallExercise();
    }
    else {
      addCallExercise();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={exercise.name} onChange={handleChange} />
      <p>Image</p>
      <input name="image" value={exercise.image} onChange={handleChange} />
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
