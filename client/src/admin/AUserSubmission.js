import { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from 'axios';
import { SubmissionsContainer, SubmissionContainerLeft, SubmissionContainerMiddle, SubmissionContainerRight, StyledLink, SubmissionVerification } from "../components/Styles";

const AUserSubmission = ({name, status, id, created_at, user_id}) => {
  const [user, setUser] = useState({})
  // const [level, setLevel] = useState({})
  
  useEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    try {
      let res = await axios.get(`/api/users/${user_id}`)
      console.log(res.data)
      setUser(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SubmissionsContainer>
      <SubmissionContainerLeft>
        <img src={user.image} style={{ borderRadius: "50%", height: "99%", width: "99%"}}/>
      </SubmissionContainerLeft>
      <SubmissionContainerMiddle>
        <h4>{user.first_name} {user.last_name}</h4>
        <p>Movement type</p>
        <p>Submitted at {created_at}</p>
        <p>{status}</p>
      </SubmissionContainerMiddle>
      <SubmissionContainerRight>
        <SubmissionVerification to={`/admin-submissions/${id}`}>
          Verify
        </SubmissionVerification>
      </SubmissionContainerRight>
    </SubmissionsContainer>
  )
}

export default AUserSubmission;
