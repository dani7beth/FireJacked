import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ShowLevel from "./ShowLevel";
import { BoxUserHistory } from '../components/Styles';
import styled from 'styled-components'
import Submission from "../submissions/Submission";
import { NateSeeHistorySubs, NateSeeHistoryContainer, NateSeeHistorySubsContainer } from "../components/Styles";


const SeeHistory = () => {

  const { exercise_id } = useParams();
  const { level_id } = useParams()

  const [exercise, setExercise] = useState({})
  const [levels, setLevels] = useState([])
  const [submissions, setSubmissions] = useState([])
  const [submission, setSubmission] = useState({value:"empty"})
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [dataLength, setDataLength] = useState(0)
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true)
  const [loadingComments, setLoadingComments] = useState(true)

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getExercise()
    getLevels()
    userHistorySubmissions()
  }, []);

  // useEffect(()=>{
  //   if (submission && level_id) {
  //     seeSubmission()
  //   }
  //   setLoading(false)
  // },[level_id && submission])

  // const seeSubmission = () => {
  //   // debugger
  //   let x = submissions.filter((x)=>x.level_id === parseInt(level_id))
  //   console.log(level_id)
  //   console.log(x)
  //   setSubmission(x)
  //   // setLoading(false)
  // }
  
  useEffect(() => {
    if (submissions.length > 0){
      getComments()
    }
  }, [submissions])

 

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
    // debugger
    Axios.get(`/api/user_see_history/?exercise_id=${exercise_id}`)
    .then((response) => {
      console.log(`User ${user.id}'s submissions:`, response.data)
      // setSubmissions(response.data.filter((submission) => submission.user_id !== user.id))
      // debugger
      setSubmissions(response.data.data)
      setTotalPages(response.data.total_pages)
      setDataLength(response.data.total_length)
      setSubmission(response.data.data[0])
      setLoading(false)
      console.log(submission)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const submissionTimeStamp = () => {
    let date = new Date(submission.created_at);
    return <>{submission && date.toLocaleDateString("en-US")}</>;
  };

  const getComments = () => {
    // debugger
    Axios.get(`/api/${submission.value === 'empty' ? submissions[0].id : submission.id}/see_comments`)
    .then((response) => {
      console.log('COMMENTS')
      console.log(submission.id, response.data)
      setComments(response.data)
      setLoadingComments(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const renderComments = () => {
    if (loadingComments) {
      <h1>Loading...</h1>
    }
    
    return comments.map((comment) => {
      return (
        <>
          <CommentAdminName>
            <CommentAdminImage src={comment.admin_image} />
            {comment.admin_first} {comment.admin_last}
          </CommentAdminName>
          <p>{comment.body}</p>
        </>
      )
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

  const deleteSubmission = (id) => {
    Axios.delete(`/api/levels/${level_id}/submissions/${id}`)
      .then((res) => {
        // setSubmissions(
        //   submissions.filter((submission) => submission.id !== id)
      // )
        userHistorySubmissions()
        ;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editCalledSubmission = (id, submission) => {
    let videoData = new FormData();
    videoData.append("completed", submission.completed);
    videoData.append("name", submission.name);
    videoData.append("video_upload", submission.video_upload);
    videoData.append("level_id", submission.level_id);
    videoData.append("status", submission.status)
    Axios.put(`/api/levels/${level_id}/submissions/${id}`, videoData)
      .then((res) => {
        console.log(res.data);
        // let newSubmissions = submissions.map((s) =>
        //   s.id !== id ? s : res.data
        // );
        // setSubmissions(newSubmissions);
        userHistorySubmissions()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const renderSubmissions = () => {
    return submissions.map((submission) => {
      return (
        <>
          <ShowLevel 
            key={`submission-${submission.id}`} {...submission} 
            submission = {submission} 
            renderClickedSubmission={renderClickedSubmission} 
            deleteSubmission={deleteSubmission} 
            editCalledSubmission={editCalledSubmission}
            submissionTimeStamp={submissionTimeStamp}
          />
        </>
      )
    })
  }

  const renderClickedSubmission = (newSubmission) => {
    console.log(newSubmission);
    setSubmission(newSubmission)
  }

  const renderVideo = () => {
    return (
      <div key={submission.video}>
        <Video controls={true} className="embed-responsive-item">
          <source src={submission.video} type="video/mp4" />
        </Video>
      </div>
    )
  }

  const renderInfo = () => {
    if (loading) {
      return <p>Loading...</p>
    }
  
    return (
      <Info>
        {submissionTimeStamp()} | {exercise.category}
      </Info>
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

  

  const renderStatus = () => {
    if (submission.status === 'Approved'){
      return (
        <StatusContainerApproved>
          <Status>{submission.status}</Status>
        </StatusContainerApproved>
      )
    } if(submission.status === 'Pending'){
      return (
        <StatusContainerPending>
          <Status>{submission.status}</Status>
         </StatusContainerPending>
      )
    }else {
      return (
        <StatusContainerFailed>
          <Status>{submission.status}</Status>
        </StatusContainerFailed>
      )
    }
  }

  const saveTheRender = () => {
    if(submissions.length === 0) {
        return (
          <>
            <h1>Oops! Looks like you haven’t made any submissions for this exercise. Go make one and then come back!</h1>
            <h1 style={{textAlign:'center'}}>
              <a className='btn btn-secondary'  href={`/showexercise/${exercise_id}`}>Back</a>
              <Button variant='primary' onClick={handleShow}>Submissions</Button>
            </h1>
          {modal()}
          </>
        )
    } else {
        return (
          <div>
            <Row>
              <Col>
                <Title>{user.first_name} {user.last_name}</Title>
              </Col>
            </Row>
              <Row>
                <Col>
                  {renderVideo()}
                  <CommentsContainer>
                    <CommentTitle>Comments</CommentTitle>
                      <Comments>{renderComments()}</Comments>
                  </CommentsContainer>
                </Col>
                <Col>
                <NateSeeHistoryContainer>
                    <TitleLink to={`/showexercise/${exercise_id}`}>
                      <ExerciseTitle>{exercise.activity}</ExerciseTitle>
                    </TitleLink>
                  {renderInfo()}
                  {renderStatus()}
                </NateSeeHistoryContainer>
                  <NateSeeHistorySubsContainer>
                    <HistoryTitle>History</HistoryTitle>
                      <NateSeeHistorySubs>
                          {renderSubmissions()}
                      </NateSeeHistorySubs>
                  </NateSeeHistorySubsContainer>
                </Col>
              </Row>
              {modal()}
          </div>
        )
      }
    }
  if(loading){
    <h1>loading...</h1>
  }

  return saveTheRender();
  
};

export default SeeHistory;

export const Title = styled.h1`
  text-align:center;
`
export const TitleLink = styled(Link)`
  color:black;
`

export const ExerciseTitle = styled.h1`
  padding-top:20px;
  padding-left:10px;
  padding-right:10px;
  padding-bottom:10px;
`

export const Info = styled.h4`
  padding-left:10px;
`

export const Status = styled.p`
  padding-top:12px;
  padding-bottom:0px;
`
export const StatusContainerApproved = styled.div`
  border:1px solid #00A86B;
  border-radius:10px;
  background-color: #00A86B;
  margin-left: 8px;
  text-align: center;
  width: 25%;
  color: #FFFFFF;
`

export const StatusContainerPending = styled.div`
  border:1px solid #FEBD4A;
  border-radius:10px;
  background-color: #FEBD4A;
  margin-left: 8px;
  text-align: center;
  width: 25%;
  color: #FFFFFF;
`

export const StatusContainerFailed = styled.div`
  border:1px solid #F08080;
  border-radius:10px;
  background-color: #F08080;
  margin-left: 8px;
  text-align: center;
  width: 25%;
  color: #FFFFFF;
`

export const Video = styled.video`
  width:720px;
  margin-left:45px; 
  margin-top:23px;
  border-radius:8px;
`
export const CommentsContainer = styled.div`
  margin-left: 45px;
  height: 182px;
  width: 720px;
  border: 2px solid #d6d6d6;
  border-radius: 8px;
`

export const CommentTitle = styled.h5`
  text-align: center;
  text-decoration:underline;
`

export const Comments = styled.div`
  height: 137px;
  margin-left: 20px;
  overflow: auto;
`

export const CommentAdminName = styled.p`
  font-size:1.05rem;
  width: 20%;
  text-align:center;
  background-color: lightgrey;
  border-radius:8px;
`

export const CommentAdminImage = styled.img`
  width:20px;
  border-radius:50%;
`

export const HistoryTitle = styled.h5`
  padding:20px; 
  text-decoration:underline;
`