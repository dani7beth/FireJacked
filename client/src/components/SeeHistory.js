import Axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Levels from "./Levels";
import ShowLevel from "./ShowLevel";
import { BoxUserHistory } from '../components/Styles';
import styled from 'styled-components'

const SeeHistory = () => {
  const [exercise, setExercise] = useState({})
  const [levels, setLevels] = useState([])
  const [submissions, setSubmissions] = useState([])
  const [submission, setSubmission] = useState({})
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [dataLength, setDataLength] = useState(0)
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const { exercise_id } = useParams();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getExercise()
    getLevels()
    userHistorySubmissions()
  }, []);

  useEffect(() => {
    if (submission){
      getComments()
    }
  }, [submission])

 

  const getExercise = async () => {
    try {
      let res = await Axios.get(`/api/exercises/${exercise_id}`)
      console.log(res.data)
      setExercise(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getLevels = () => {
    Axios.get(`/api/exercises/${exercise_id}/levels`)
    .then((response)=>{
      console.log(response.data)
      setLevels(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const userHistorySubmissions = () => {
    Axios.get(`/api/user_see_history/?exercise_id=${exercise_id}`)
    .then((response) => {
      console.log(`User ${user.id}'s submissions:`, response.data)
      // setSubmissions(response.data.filter((submission) => submission.user_id !== user.id))
      setSubmissions(response.data.data)
      setTotalPages(response.data.total_pages)
      setDataLength(response.data.total_length)
      setSubmission(response.data.data[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getComments = () => {
    Axios.get(`/api/${submission.id}/see_comments`)
    .then((response) => {
      console.log('COMMENTS')
      console.log(submission.id, response.data)
      setComments(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const renderComments = () => {
    return comments.map((comment) => {
      return <h4>{comment.admin_name}: {comment.body}</h4>
    })
  }

  const loadMore = () => {
    const pageX = page + 1
    Axios.get(`/api/user_see_history/?exercise_id=${exercise_id}&page=${pageX}`)
    .then((response) => {
      console.log(`User ${user.id}'s submissions:`, response.data)
      // setSubmissions(response.data.filter((submission) => submission.user_id !== user.id))
      setSubmissions(...submissions, ...response.data.data)
      setPage(pageX)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  const renderSubmissions = () => {
    return submissions.map((submission) => {
      return (
        <>
        <ShowLevel key={`submission-${submission.id}`} {...submission} submission = {submission} renderClickedSubmission={renderClickedSubmission}/>
        </>
      )
    })
  }

  const renderClickedSubmission = (newSubmission) => {
    // renderVideo(newSubmission);
    setSubmission(newSubmission)
  }

  const renderVideo = () => {
    console.log(submission.id, ':', submission.video)
    return (
      <div key={submission.video}>
        <video style={{height:'450px', width:'620px'}} controls={true} class="embed-responsive-item">
          <source src={submission.video} type="video/mp4" />
        </video>
      </div>
    )
  }

  const renderInfo = () => {
    return (
      <h3>
        Id: {submission.id} | {submission.created_at} | {user.weight}lbs
      </h3>
    );
  };

  const renderLevels = () => {
    return levels.map((level)=>{
      return (
        <a href={`/submissions/${level.id}`}>
          <h1>{level.name}</h1>
        </a>
      )
    })
  }
  
  const modal = () => {
    return (
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>What level would you like to go to?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderLevels()}</Modal.Body>
      </Modal>
    )
  }

  const saveTheRender = () => {
    if(submissions.length === 0) {
        return (
          <>
            <h1>Oops! Looks like you haven’t made any submissions for this exercise. Go make one and then come back!</h1>
            <h1 style={{textAlign:'center'}}>
              <a class='btn btn-secondary'  href={`/showexercise/${exercise_id}`}>Back</a>
              <Button variant='primary' onClick={handleShow}>Submissions</Button>
            </h1>
          {modal()}
          </>
        )
    } else {
        return (
          <>
              <Row>
                <Col>
                  {renderVideo()}
                  <h1>comments</h1>
                  {renderComments()}
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
                  <div>
                    <h5>History</h5>
                    <BoxUserHistory>
                      <StyledScroll
                            dataLength={submissions.length}
                            next={() => loadMore()}
                            hasMore={submissions.length === dataLength ? false : true}
                            loader={<h4>Loading... submissions.length = {submissions.length} dataLength= {dataLength} </h4>}
                            height={300}
                            endMessage={
                          <p style={{ textAlign: "center" }}>
                            {/* <b>submissions.length = {submissions.length} dataLength= {dataLength}</b> */}
                          </p>
                            }
                        >
                            {renderSubmissions()}
                      </StyledScroll>
                    </BoxUserHistory>
                  </div>
                  <br />
                  <a class='btn btn-secondary'  href={`/showexercise/${exercise_id}`}>Back</a>
                  <Button variant='primary' onClick={handleShow}>Submissions</Button>
                </Col>
              </Row>
              {modal()}
          </>
        )
      }
    }
  return saveTheRender();
};

export default SeeHistory;

export const StyledScroll = styled(InfiniteScroll)`
  .infinite-scroll-component.sc-cxFLnm.gLcLRL{
  border: 10px solid red,
  }
`
