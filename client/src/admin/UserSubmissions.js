import axios from 'axios';
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import SingleSubmissionUser from "./SingleSubmissionUser";

const UserSubmissions = () => {
  const [allSubmissions, setAllSubmissions] = useState([])
  const { user_id } = useParams();
  
  useEffect(()=>{
    if (user_id){
      getSubmissions()
    }
    
  }, [user_id]) 

  const getSubmissions = async () => {
    try {
      let res = await axios.get(`/api/all_submissions/${user_id}`)
      console.log(res.data)
      console.log(res.data.filter(s => s.status === "Pending"));
      setAllSubmissions(res.data.filter(s => s.status === "Pending"))
    } catch (error) {
      console.log(error)
    }
  }

  const editedSubmission = (editedObject) => {
    let newSubmissions = allSubmissions.filter(x => x.id !== editedObject.id )
    setAllSubmissions(newSubmissions)
    alert(`You've modified Submission ${editedObject.id}`)
  }

  const renderUserSubmissions = () => {
    // debugger
    if (allSubmissions) {
      return allSubmissions.map((submission) => (
        <SingleSubmissionUser key={submission.id} submission={submission} editedSubmission={editedSubmission}/>
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
