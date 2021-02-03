import axios from 'axios';
import { useState, useEffect } from 'react';
import Trainer from "./Trainer";
import { Link } from "react-router-dom";
import { TrainerInfoDiv, StyledLink } from '../components/Styles';

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
          <img src={trainer.image} alt="blank profile" style={{ borderRadius: "50%", width: '100px', margin:"auto" }} />
          <StyledLink to={`show_admin/${trainer.id}`}>
            <h5 key={trainer.id} style={{textAlign:"center", padding: "10px"}}>{trainer.first_name} {trainer.last_name}</h5>
          </StyledLink>
        </>
      )
    })
  }

  return (
    <TrainerInfoDiv>
      <h1>Trainers</h1>
      {renderTrainers()}
    </TrainerInfoDiv>
  )
}

export default TrainerIndex;
