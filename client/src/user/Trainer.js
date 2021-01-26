import axios from 'axios';
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

const Trainer = () => {
  const [admin, setAdmin] = useState({});
  const { admin_id } = useParams()

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    try {
      let res = await axios.get(`/api/admins/${admin_id}`)
      setAdmin(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>{admin.first_name} {admin.last_name}</h1>
      <p>{admin.first_name}'s speciality is {admin.speciality}. Feel free to contact them for help!</p>
      <p>{admin.first_name}'s email is {admin.email}. {admin.first_name}'s phone number is {admin.phone}.</p>
    </>

  )
}

export default Trainer;
