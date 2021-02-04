import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { UserInfoDiv, StyledLink, UserIndexDiv, UserIndexTop, UserIndexBottom, UserFromList, UserSelected, UserFromListSelected } from '../components/Styles';
import { Form } from 'react-bootstrap';

const UserIndex = ({selectedUser, setSelectedUser, setCurrentDisplayExercises}) => {
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
            <UserFromList onClick={() => {
              setCurrentDisplayExercises(false)
              setSelectedUser(user)
              
              }}>
              <img src={user.image} alt="blank profile" style={{ borderRadius: "50%", width: '100px', alignSelf:"center"}}/>
              <h3  key={user.id} style={{alignSelf:"center"}}>{user.first_name}</h3>
              <h3  key={user.id} style={{alignSelf:"center"}}>{user.last_name}</h3>
            </UserFromList> 
          </>
        )
      } else {
        return (
          <>
            <UserFromListSelected onClick={() => setSelectedUser(user)}>
              <img src={user.image} alt="blank profile" style={{ borderRadius: "50%", width: '100px', alignSelf:"center"}}/>
              <UserSelected key={user.id} >{user.first_name}</UserSelected>
              <UserSelected key={user.id} >{user.last_name}</UserSelected>
            </UserFromListSelected> 
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
