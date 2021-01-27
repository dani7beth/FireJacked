import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UserIndex = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await axios.get('/api/user_index/');
      console.log(res.data);
      setUsers(res.data);
    } catch {
    }
  }

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <>
        {/* /show_user_submissions/:user_id */}
          <Link to={`/show_user_submissions/${user.id}`}>  
            <h1 key={user.id}>{user.first_name} {user.last_name}</h1>
          </Link>
            <img src={user.image} alt="blank profile"/>
        </>
      )
    })
  }

  return (
    <>
      <h1>Users</h1>
      {renderUsers()}
    </>
  )
}

export default UserIndex;