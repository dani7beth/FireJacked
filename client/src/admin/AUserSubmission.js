import { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from 'axios';
import { SubmissionsContainer, SubmissionContainerLeft, SubmissionContainerMiddle, SubmissionContainerRight } from "../components/Styles";

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
    <>
      <div>
        <SubmissionsContainer>
          <SubmissionContainerLeft>
            <img src={user.image} style={{ borderRadius: "50%", height: "99%", width: "99%"}}/>
          </SubmissionContainerLeft>
          <SubmissionContainerMiddle>
          <h1>{user.first_name} {user.last_name}</h1>
          <h2>Movement type</h2>
          <p>Submitted at {created_at}</p>
          <p>{status}</p>
          </SubmissionContainerMiddle>
          <SubmissionContainerRight>
          <Link to={`/admin-submissions/${id}`}>
            <Button>Verify</Button>
          </Link>
          </SubmissionContainerRight>
        </SubmissionsContainer>
      </div>
    </>
  )
}

export default AUserSubmission;
