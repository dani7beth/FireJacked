import { useState } from "react";
import Axios from 'axios';

const ExerciseForm = ({exerciseProp,addExercise}) =>{
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [howToVideo, setHowToVideo] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');



  const [exercise,setExercise] =useState(
    exercise ? {
      name: exercise.name,
      image: exercise.image,
      howToVideo: exercise.howToVideo,
      category: exercise.category,
      activity: exercise.activity,
    }:
    {
      name:'',
      image:'',
      howToVideo:'',
      category:'',
      activity:'',
    }
  )

  {/*  
      I     
      const onChange = (e) => {
        e.preventDefault();
        e.target.value(exercise)??
      }

      maybe you pass 'exercise' to const onChange and then do 
    
  */}

  

  // const addExercise = () => {
  //   Axios.post('api/exercises', exercise )
  //   .then((res)=>{
  //     console.log(res.data)
  //     addExercise(res.Data);
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // };

  const editExercise = () => {
    Axios.put(`/api/exercises/${exercise.id}`, exercise)
      .then((res) => {
        console.log(res.data)
        editExercise(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  const handleSubmit = () => {
    if (exercise) {
      editExercise();
    }
    else {
      addExercise();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input label='Image' value={image} onChange={(e) => setImage(e.target.value)} />
      <input label='How To Video' value={howToVideo} onChange={(e) => setHowToVideo(e.target.value)} />
      <input label='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
      <input label='Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
      <button type='submit'>submit</button>
    </form>
  )
}
export default ExerciseForm;