import {useEffect, useState} from "react"
import axios from "axios"
import SubmissionAdmin from "./SubmissionAdmin"
const SubmissionsAdmin = () => {

  const [submissions, setSubmissions] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(()=>{
    getAllSubmissions()
  },[])

  const getAllSubmissions = async () => {
    try {
      // debugger
      let res = await axios.get("/api/all_submissions")
      console.log(res.data)
      setSubmissions(res.data)
    } catch (error) {
      console.log(error)
      return (
        <h1>It would appear there has been a grave error. </h1>
      )
    }
  }
  
  const renderSubmissions = () => {

    if (filter){
      console.log(submissions.filter(s => s.completed !== true))
      return submissions.filter(s => s.completed !== true).map(s => <SubmissionAdmin key={s.id}{...s}/>)
    }

    return submissions.map(s => <SubmissionAdmin key={s.id}{...s}/>)
  }

  return (
    <>
    <h1>Select a Submssion</h1>
    <button onClick={() => setFilter(!filter)}>Click to Filter Out completed</button>
    {renderSubmissions()}
    </>
  )
}

export default SubmissionsAdmin