import Axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";


const ShowExerciseAdmin = () => {
  const [exercise, setExercise] = useState({})
  const [submissions, setSubmissions] = useState([])
  const { exercise_id } = useParams()


  useEffect(() => {
    getExercise()
    getAllSubmissions();
  }, []);

  const getExercise = async () => {
    try { 
      let res = await Axios.get(`/api/exercises/${exercise_id}`)
      console.log(res.data)
      setExercise(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllSubmissions = () => {
    Axios.get('/api/users_submissions')
    .then((response) => {
      console.log(response.data)
      setSubmissions(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const renderSubmissions = () => {
    return submissions.map((submission) => {
      return (
        <>
          <h1>
            {submission.name}, 
            {submission.completed ? 'completed' : 'not completed'}
          </h1>
          <p>'hello'</p>
        </>
      )
    })
  }

  return (
    <>
      <Row>
        <Col paddingLeft="500px">
          <video style={{width:'400px', height:'300px'}} controls="true" class="embed-responsive-item">
            <source src={exercise.how_to_video} type="video/mp4" />
          </video>
          <p>How to Video</p>
        </Col>
        <Col>
          <h5>{exercise.category}</h5>
          <h1>{exercise.activity}</h1>
          <div>
            <p>{exercise.description}</p>
            <p>(DESCRIPTION)<br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum 
              has been the industry's standard dummy text ever since the 1500s when an unknown printer 
              took a galley of type and scrambled it to make a type specimen book it has?
            </p>
          </div>
        </Col>
      </Row>
      <br/> <br/>
      {renderSubmissions()}
      {/* 
        <Carousel>
        submissionVideo
        updated at, created at.
        <Carousel/>
      */}
    </>
  )
}
export default ShowExerciseAdmin;