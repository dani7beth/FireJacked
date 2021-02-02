import { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from 'axios';

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
        <h1>{name}</h1>
        <p>Submitted by {user.first_name} {user.last_name}</p>
        <p>Submitted at {created_at}</p>
        <p>{status}</p>
        <Link to={`/admin-submissions/${id}`}>
          <Button>Verify</Button>
        </Link>
      </div>
    </>
  )
}

export default AUserSubmission;
