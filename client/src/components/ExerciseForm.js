import { useState } from "react";
import Axios from 'axios';

const ExerciseForm = ({exerciseProp,addExercise}) =>{
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [howToVideo, setHowToVideo] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');

  const [exercise,setExercise] = useState(
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

  const handleSubmit = () => {
    if (exerciseProp) {
      editExercise({name: name, image: image, howToVideo: howToVideo, category: category, activity: activity});
    }
    else {
      addExercise({name: name, image: image, howToVideo: howToVideo, category: category, activity: activity});
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Image</p>
      <input name="image" value={image} onChange={(e) => setImage(e.target.value)} />
      <p>How To Video</p>
      <input name="howToVideo" value={howToVideo} onChange={(e) => setHowToVideo(e.target.value)} />
      <p>Category</p>
      <input name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <p>Activity</p>
      <input name="activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
      <br />
      <button type='submit'>submit</button>
    </form>
  )
}
export default ExerciseForm;