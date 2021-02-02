import Axios from "axios";
import { useEffect, useState} from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ShowExercise = () => {
  const [exercise, setExercise] = useState({});
  const [submissions, setSubmissions] = useState([]);

  const { exercise_id } = useParams();

  // const { user } = useContext(AuthContext);

  useEffect(() => {
    getExercise();
    getAllSubmissions();
  }, []);

  const getExercise = async () => {
    try {
      // debugger
      let res = await Axios.get(`/api/exercises/${exercise_id}`);
      console.log(res.data);
      setExercise(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSubmissions = () => {
    Axios.get("/api/users_submissions")
      .then((response) => {
        console.log(response.data);
        setSubmissions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // set carousel limit to one at a time?
  const renderSubmissions = () => {
    return submissions.map((submission) => {
      // Carousel.Item onClick >> showSubmission ??
      return (
        <Carousel.Item>
          {/* <video
              className="d-block w-100"
              src={submission.video_upload}
              alt="Submission video"
              style={{ height: "450px", width: "500px" }}
            /> */}
          <video controls="true">
            <source
              src={submission.video_upload}
              style={{ height: "450px", width: "500px" }}
            />
          </video>
          <Carousel.Caption>
            <p>
              {submission.created_at} -{" "}
              {submission.completed ? "approved" : "not approved"}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  return (
    <>
      <Row>
        <Col paddingLeft="500px">
          {/* <video
            style={{ width: "400px", height: "300px" }}
            controls="true"
            class="embed-responsive-item"
          >
            <source src={exercise.how_to_video} />
          </video> */}
          <div>
            <video controls="true" style={{ width: "400px", height: "300px" }}>
              <source src={exercise.how_to_video} />
            </video>
            <p>How to Video</p>
          </div>
        </Col>
        <Col>
          <h5>{exercise.category}</h5>
          <h1>{exercise.activity}</h1>
          <div>
            <p>{exercise.description}</p>
          </div>
          <div>
            <Link to={`/${exercise_id}/user_see_history/level_id`}>See History</Link>
          </div>
        </Col>
      </Row>
      <Carousel>{renderSubmissions()}</Carousel>
    </>
  );
};

export default ShowExercise;
