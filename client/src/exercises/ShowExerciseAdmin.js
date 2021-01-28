import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Button, Carousel, Col, Modal, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ExerciseForm from "./ExerciseForm";



const ShowExerciseAdmin = () => {
  const [exercise, setExercise] = useState({})
  const [submissions, setSubmissions] = useState([])
  const [editShow, setEditShow] = useState(false)

  const { exercise_id } = useParams()

  const { user } = useContext(AuthContext)

  const handleEditShow = () => setEditShow(true)
  const handleEditHide = () => setEditShow(false)

  useEffect(() => {
    getExercise()
    exerciseSubmissions()
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

  const exerciseSubmissions = () => {
    Axios.get(`/api/exercise_subs/?exercise_id=${exercise_id}`)
    .then((response) => {
      console.log(response.data)
      setSubmissions(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // set carousel limit to one at a time?
  const renderSubmissions = () => {
    return submissions.map((submission) => {
      return (
          <Carousel.Item>
            <video
              className='d-block w-100'
              src={submission.video}
              alt="Submission video"
              style={{height:'450px', width:'500px'}}
            />
            <Carousel.Caption>
              <p>{submission.user_first_name}</p>
              <p>{submission.created_at} - {submission.completed ? 'approved' : 'not approved' }</p>
              {/* <p>updated at: {submission.updated_at}</p> */}
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
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
            {/* <Button size='sm' variant='secondary' onClick={handleEditShow} >Edit Exercise</Button> */}
          </div>
          <div>
            <p>See History</p>
          </div>
        </Col>
      </Row>
      <Carousel>
        {renderSubmissions()}
      </Carousel>

      <Modal show={editShow} onHide={handleEditHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit exericise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Figure out how to do the edit exercise form here.
            Maybe, like James said, do a modal component.
            {/* <ExerciseForm editExercise={editExercise} exerciseProp={exerciseProp} handleEditHide={handleEditHide} editExercises={editExercises} /> */}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ShowExerciseAdmin;