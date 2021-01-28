import Axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ShowLevel from "./ShowLevel";

const SeeHistory = () => {
  const [exercise, setExercise] = useState({})
  const [submissions, setSubmissions] = useState([])
  const [submission, setSubmission] = useState([])
  


  const { exercise_id } = useParams()

  const { user } = useContext(AuthContext)

  useEffect(() => {
    getExercise()
    userHistorySubmissions()
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

  const userHistorySubmissions = () => {
    Axios.get(`/api/user_see_history/?exercise_id=${exercise_id}`)
    .then((response) => {
      console.log(`User ${user.id}'s submissions:`, response.data)
      // setSubmissions(response.data.filter((submission) => submission.user_id !== user.id))
      setSubmissions(response.data)
      setSubmission(response.data[0])
      console.log()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  

  const renderSubmissions = () => {
    return submissions.map((submission)=>{
      return (
        <>
        <ShowLevel key={`submission-${submission.id}`} {...submission} submission = {submission} renderClickedSubmission={renderClickedSubmission}/>
        </>
      )
    })
  }

  const renderClickedSubmission = (newSubmission) => {
    renderVideo(newSubmission);
    setSubmission(newSubmission)
  }

  const renderVideo = () => {
    console.log(submission.id, ':', submission.video)
    return (
      <div key={submission.video}>
        <video style={{height:'450px', width:'500px'}} controls={true} class="embed-responsive-item">
          <source src={submission.video} type="video/mp4" />
        </video>
      </div>
    )
  }

  const renderInfo = () => {
      return <h3>Id: {submission.id} | {submission.created_at} | {user.weight}lbs</h3>
  }

  const saveTheRender = () => {
    if(submissions.length === 0) {
        return (
          <>
            <h1>Oops! Looks like you haven’t made any submissions for this exercise. Go make one and then come back!</h1>
            <h1 style={{textAlign:'center'}}><a class='btn btn-primary'  href={`/showexercise/${exercise_id}`}>Go Back</a></h1>
          </>
        )
    } else {
        return (
          <>
            <a class='btn btn-light'  href={`/showexercise/${exercise_id}`}>Back</a>
              <Row>
                <Col>
                  <h1>VIDEO</h1>
                  {renderVideo()}
                </Col>
                <Col>
                  <div>
                    <h1>{exercise.activity}</h1>
                    {/* <p>level?</p> */} 
                  </div>
                  <div style={{paddingBottom:'60px', paddingTop:'20px'}}>
                    {renderInfo()}
                    <h3 style={{border:'2px solid orange', borderRadius:'20%', width:'110px'}}>{submission.status}</h3>
                    {/* 
                        <h3 style={{border:'2px solid green', borderRadius:'20%', width:'110px'}}>Completed</h3>
                        <h3 style={{border:'2px solid red', borderRadius:'20%', width:'110px'}}>Failed</h3> 
                        how do I make this border stick just around 'Pending' or whatever will be written there?
                        We should make so if it's completed it's green, pending, is orange, and failed is red.
                    */}
                  </div>
                  <div style={{border:'1px solid black'}}>
                    <h5>History</h5>
                      {renderSubmissions()}
                    <p>infinite scroll?</p>
                  </div>
                </Col>
              </Row>
          </>
        )
      }
    }
    return saveTheRender()
  }

export default SeeHistory;