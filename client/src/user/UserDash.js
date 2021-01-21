import Axios from 'axios';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, } from "../providers/AuthProvider"

const UserDash = () =>{
  const {user} = useContext(AuthContext);

  const renderUserInfo = () =>{
    if(user){
      return (
        <>
        <h1>Welcome {user.first_name} {user.last_name}</h1>
        <Link to='/edit_profile'>Edit Profile</Link>
        </>
      )
    }
  }
  return(
    <>
      {renderUserInfo()}
    </>
  )
}
export default UserDash;