import Axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, Col, Modal, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

const ShowExerciseAdmin = () => {
  const [exercise, setExercise] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [editShow, setEditShow] = useState(false);

  const { exercise_id } = useParams();

  // const { user } = useContext(AuthContext);

  const handleEditShow = () => setEditShow(true);
  const handleEditHide = () => setEditShow(false);

  useEffect(() => {
    getExercise();
  }, []);

  useEffect(()=>{
    if(exercise) {
      exerciseSubmissions();
    }
  }, [exercise])

  const getExercise = async () => {
    try {
      let res = await Axios.get(`/api/exercises/${exercise_id}`);
      console.log(res.data);
      setExercise(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const exerciseSubmissions = () => {
    Axios.get(`/api/exercise_subs/${exercise_id}`)
      .then((response) => {
        console.log('subs', response.data);
        setSubmissions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // set carousel limit to one at a time?
  const renderSubmissions = () => {
    return submissions.map((submission) => {
      const submissionTimeStamp = () => {
        let date = new Date(submission.created_at);
        return <>{submission && date.toLocaleDateString("en-US")}</>;
      };
      return (
        <Carousel.Item>
          <CarouselVids controls={true} src={submission.video} />
          <SubInfo>
            <SubLink to={`/admin-submissions/${submission.id}`}>
              <h5>{submission.user_first_name}</h5>
              <p>
                {submissionTimeStamp()} -{" "}
                {submission.status}
              </p>
            </SubLink>
          </SubInfo>
        </Carousel.Item>
      );
    });
  };

  const renderCarousel = () => {
    if(submissions.length !== 0){
      return <MyCarousel>{renderSubmissions()}</MyCarousel>
    } else {
      return <NoSubs>NO SUBMISSIONS</NoSubs>
    }
  }

  return (
    <>
      <FlexRow>
        <FlexCol paddingLeft="500px">
          <HowToVideo controls="true" src={exercise.how_to_video} type="video/mp4" />
        </FlexCol>
        <FlexCol>
          <InfoContainer>
            <Category>{exercise.category}</Category>
            <Header>{exercise.activity}</Header>
            <ExerciseDesc>
              <p>{exercise.description}</p>
            </ExerciseDesc>
          </InfoContainer>
        </FlexCol>
      </FlexRow>
      <FlexRow>
        <CarouselContainer>
          <Recordings>
            USERS' SUBMISSIONS
          </Recordings>
          {renderCarousel()}
        </CarouselContainer>
      </FlexRow>
    </>
  );
};

export default ShowExerciseAdmin;

export const CarouselVids = styled.video`
  height:450px;
  border-radius:10px;
`

export const FlexRow = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;
`

export const FlexCol = styled.div`
  display:flex;
  flex-direction:column;
  flex-basis:100%;
  flex:1;
`

export const HowToVideo = styled.video`
  width:700px;
  margin-left:20px;
  border-radius:10px;
`

export const MyCarousel = styled(Carousel)`
  text-align:center;
  .carousel-control-next {
     margin: 0;
     top:210px;
     height:30px;
  }
  .carousel-control-prev {
    margin:0;
    top:210px;
    height: 30px;
  }
`

export const SubInfo = styled.p`
  padding-top:20px;
  padding-bottom:30px;
`

export const Recordings = styled.h1`
  text-align:center;
  padding:35px;
`

export const CarouselContainer = styled.div`
  margin: 0 auto;
  width: 880px;
`

export const InfoContainer = styled.div`
  width:77%;
  margin-top:30px;
  margin-left:50px;
`

export const Category = styled.p`
  font-weight: 550;
  margin-bottom:8px;
`

export const ExerciseDesc = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`

export const Header = styled.h1`
  margin-top:0px;
`

export const NoSubs = styled.h2`
  margin-top:50px;
  font-weight: 900;
  text-align:center;
`

export const SubLink = styled(Link)`
  color:black;
`