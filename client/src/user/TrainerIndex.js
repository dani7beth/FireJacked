import axios from 'axios';
import { useState, useEffect } from 'react';

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
        <h1 key={trainer.id}>{trainer.first_name}</h1>
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
