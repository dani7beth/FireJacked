import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { UserInfoDiv, StyledLink, UserIndexDiv, UserIndexTop, UserIndexBottom } from '../components/Styles';
import { Form } from 'react-bootstrap';

const UserIndex = ({selectedUser, setSelectedUser}) => {
  const [users, setUsers] = useState([])
  const [searchText, setSearchText] = useState("")
  const [usersDefault, setUsersDefault] = useState([])

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    // debugger
    try {
      let res = await axios.get('/api/user_index/');
      console.log(res.data);
      setUsers(res.data);
      setUsersDefault(res.data)
      
    } catch {
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   filteredUsers = users.filter((a) => a.first_name.indexOf(searchText) === -1)
  // }

  const searchFor = (searchText) => {
    // debugger
    console.log("Searched")
    setSearchText(searchText)
    let filteredUsersOne = usersDefault.filter(x => x.first_name !== null)
    let filteredUsers = filteredUsersOne.filter((str) => str.first_name.indexOf(searchText) > -1)
    setUsers(filteredUsers)
    
    
    console.log(searchText)
  }

  const searchBar = () => {

    return(
      <Form>
        <Form.Control 
          label = "Search for a User" 
          placeholder="Search Here" 
          type="text" 
          value={searchText} 
          onChange={(e)=>{
            searchFor(e.target.value)
          }
          }/>
      </Form>
    )
  }

  const renderUsers = () => {
    return users.map((user) => {
      if (selectedUser !== user){
        return (
          <>
            {/* /show_user_submissions/:user_id */}
            {/* <StyledLink to={`/show_user_submissions/${user.id}/`}>  */}
            <div onClick={() => setSelectedUser(user)} style={{ borderRadius: "50%", width: '100px', margin: "auto", textAlign: "center" }}>
              <img src={user.image} alt="blank profile" style={{ borderRadius: "50%", width: '100px'}}/>
            </div> 
              <h3 key={user.id} style={{textAlign:"center"}}>{user.first_name} {user.last_name}</h3>
            {/* </StyledLink> */}
          </>
        )
      } else {
        return (
          <>
            {/* /show_user_submissions/:user_id */}
            {/* <StyledLink to={`/show_user_submissions/${user.id}/`}>  */}
            <div onClick={() => setSelectedUser(user)} style={{ borderRadius: "50%", width: '100px', margin: "auto", textAlign: "center" }}>
            <h7>SELECTED USER BELOW (I need help highlighting)</h7>             
              <img src={user.image} alt="blank profile" style={{ borderRadius: "50%", width: '100px'}}/>
            </div> 
            <h7>SELECTED USER BELOW (I need help highlighting)</h7>
              <h3 key={user.id} style={{textAlign:"center"}}>{user.first_name} {user.last_name}</h3>
            {/* </StyledLink> */}
          </>
        )
      }
      
    })
  }

  return (
    <UserIndexDiv>
      <UserIndexTop styles={{position:"sticky", top: "200px"}}>
        <h1 style={{textAlign:"center"}}>Users</h1>
        <p style={{fontSize: "12px", textAlign: "center"}}>Click on a user below to view submssions that need to be approved.</p>
        {searchBar()}
      </UserIndexTop>
      <UserIndexBottom>
        {renderUsers()}
      </UserIndexBottom>
    </UserIndexDiv>
  )
}

export default UserIndex;
