import axios from 'axios';
import { useState, useEffect } from 'react';
import Trainer from "./Trainer";
import { Link } from "react-router-dom";

const TrainerIndex = () => {
  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    try {
      let res = await axios.get('/api/admin_index/');
      console.log(res.data);
      setTrainers(res.data);
    } catch {
    }
  }

  const renderTrainers = () => {
    return trainers.map((trainer) => {
      return (
        <>
          <img src={trainer.image} alt="blank profile" style={{ borderRadius: "50%", width: '200px' }} />
          <Link to={`show_admin/${trainer.id}`}>
            <h1 key={trainer.id}>{trainer.first_name} {trainer.last_name}</h1>
          </Link>
        </>
      )
    })
  }

  return (
    <>
      <h1>Trainers</h1>
      {renderTrainers()}
    </>
  )
}

export default TrainerIndex;
