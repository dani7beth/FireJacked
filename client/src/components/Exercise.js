import Axios from "axios";

const Exercise = ({ exerciseProp }) => {
  // const [ exercise,setExercise] = useState()
  // const [ showEditForm, setShowEditForm] = useState()

  // const editExercise = (res) => {
  //   const newExercise = res;
  //   if(newExercise == exerciseProp.id)return setExercise(newExercise)
  //   else return exerciseProp
  // }

  const showEditForm = () => {

  }

  const deleteExercise = () => {
    Axios.delete(`/api/exercises/${exerciseProp.id}`)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log("Error in delete exercise");
    })
  }

  return (
    <>
      <h1>{exerciseProp.name}</h1>
      <button onClick={showEditForm}>Edit Toggle for </button>
      <button onClick={deleteExercise}>Delete</button>
    </>
  )
}
export default Exercise;