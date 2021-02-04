import { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from 'axios';
import { SubmissionsContainer, SubmissionContainerLeft, SubmissionContainerMiddle, SubmissionContainerRight, StyledLink, SubmissionVerification, UserExerciseLevelContainer, AdminExerciseContainerLeft, AdminExerciseContainerMiddle, AdminExerciseContainerRight } from "../components/Styles";

const AUserSubmission = ({name, status, id, created_at, user_id, level_id}) => {
  const [user, setUser] = useState({})
  const [level, setLevel] = useState(null)
  const [exercise, setExercise] = useState({})
  // const [level, setLevel] = useState({})
  
  useEffect(() => {
    getUser()
    
  }, []);

  useEffect(() => {
    if (user) {
      getLevel();
    }
  }, [user]);

  useEffect(() => {
    if (level) {
      getExercise();
    }
  }, [level]);

  const getUser = async () => {
    try {
      let res = await axios.get(`/api/users/${user_id}`)
      setUser(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getLevel = async () => {
    try {
      let res = await axios.get(`/api/levels/${level_id}`);
      setLevel(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getExercise = async () => {
    try {
      let res = await axios.get(`/api/exercises/${level.exercise_id}`);
      setExercise(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SubmissionsContainer>
      {/* <UserExerciseLevelContainer> */}
        <SubmissionContainerLeft>
        {/* <AdminExerciseContainerLeft> */}
          <img src={user?.image} style={{ borderRadius: "50%", width: "150px", margin: "auto"}}/>
        </SubmissionContainerLeft>
        {/* </AdminExerciseContainerLeft> */}
        <SubmissionContainerMiddle>
        {/* <AdminExerciseContainerMiddle> */}
          <h3>{user?.first_name} {user?.last_name}</h3>
          <h5>Exercise: {exercise?.activity}</h5>
          <h5>Level: {level?.name}</h5>
          <h5>Status: {status}</h5>
        </SubmissionContainerMiddle>
        {/* </AdminExerciseContainerMiddle> */}
        <SubmissionContainerRight>
        {/* <AdminExerciseContainerRight> */}
          <SubmissionVerification to={`/admin-submissions/${id}`}>
            Verify
          </SubmissionVerification>
        </SubmissionContainerRight>
        {/* </AdminExerciseContainerRight> */}
      </SubmissionsContainer>
      {/* </UserExerciseLevelContainer> */}
    </div>
  )
}

export default AUserSubmission;
