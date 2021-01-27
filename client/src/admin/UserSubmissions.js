import axios from 'axios';
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import SingleSubmissionUser from "./SingleSubmissionUser";

const UserSubmissions = () => {
  const [allSubmissions, setAllSubmissions] = useState([])
  const { user_id } = useParams();
  
  useEffect(()=>{
    getSubmissions()
  }, []) 

  const getSubmissions = async () => {
    try {
      let res = await axios.get(`/api/all_submissions/${user_id}`)
      console.log(res.data);
      setAllSubmissions(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  const renderUserSubmissions = () => {
    if (allSubmissions) {
      return allSubmissions.map((submission) => (
        <SingleSubmissionUser key={submission.id} submission={submission}/>
      ))
    }
  }

  return (
    <>
      <h1>User's Submissions</h1>
      {renderUserSubmissions()}
    </>
  )

}

export default UserSubmissions;