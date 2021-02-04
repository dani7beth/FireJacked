import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Trainer = () => {
  const [admin, setAdmin] = useState({});
  const { admin_id } = useParams();

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    try {
      let res = await axios.get(`/api/admins/${admin_id}`);
      setAdmin(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <h1>TRAINERS</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ alignSelf: "flex-start" }}>
          <h2>
            {admin.first_name} {admin.last_name}
          </h2>
          <p>{admin.speciality} Certified</p>
          <h5>CONTACT INFORMATION</h5>
          <ul>
            <li>Email: {admin.email}</li>
            <li>Phone Number: {admin.phone}</li>
          </ul>
        </div>

        <TrainerPhoto photo={admin.image}></TrainerPhoto>
      </div>
    </Background>
  );
};
export default Trainer;

export const Background = styled.div`
  background-color: #f4f4f4;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    position: absolute;
    top: 200px;
    align-self: center;
  }
  padding: 400px;
  h5 {
    padding-top: 50px;
  }
  p {
    font-style: italic;
  }
`;
export const TrainerPhoto = styled.div`
  background-image: url(${(props) => props.photo});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  align-self: flex-end;
`;
