import Axios from 'axios';
import {useContext} from 'react';
import { AuthContext, } from "../providers/AuthProvider"

const UserDash = () =>{
  const {user} = useContext(AuthContext);

  const renderUserInfo = () =>{
    if(user){
      return (
        <>
        <h1>Welcome {user.first_name} {user.last_name}</h1>
        <div>
          <h3>User Info</h3>
          <img src={user.image} />
          <p>about: {user.about}</p>
          <p>email: {user.email}</p>
          <p>age: {user.age}</p>
          <p>gender: {user.gender}</p>
          <p>Height: {user.height}cm</p>
          <p>Weight: {user.weight}lb</p>
        </div>
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