import { useState } from "react";
import Axios from 'axios';

const ExerciseForm = ({exerciseProp,addExercise}) =>{
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [howToVideo, setHowToVideo] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');

  const [exercise, setExercise] = useState(
    exerciseProp ? {
      name: exerciseProp.name,
      image: exerciseProp.image,
      howToVideo: exerciseProp.howToVideo,
      category: exerciseProp.category,
      activity: exerciseProp.activity,
    }:
    {
      name:'',
      image:'',
      howToVideo:'',
      category:'',
      activity:'',
    }
  )



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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (exerciseProp) {
      editExercise({name: exercise.name, image: exercise.image, howToVideo: exercise.howToVideo, category: exercise.category, activity: exercise.activity});
    }
    else {
      addExercise({name: exercise.name, image: exercise.image, howToVideo: exercise.howToVideo, category: exercise.category, activity: exercise.activity});
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={exercise.name} onChange={(e) => setExercise({name: e.target.value})} />
      <p>Image</p>
      <input name="image" value={exercise.image} onChange={(e) => setExercise({image: e.target.value})} />
      <p>How To Video</p>
      <input name="howToVideo" value={exercise.howToVideo} onChange={(e) => setExercise({howToVideo: e.target.value})} />
      <p>Category</p>
      <input name="category" value={exercise.category} onChange={(e) => setExercise({category: e.target.value})} />
      <p>Activity</p>
      <input name="activity" value={exercise.activity} onChange={(e) => setExercise({activity: e.target.value})} />
      <br />
      <button type='submit'>submit</button>
    </form>
  )
}
export default ExerciseForm;
