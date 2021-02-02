import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UserSelection = ({selectedUser, setSelectedUser}) => {
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
    } catch (error) {
      console.log(error)
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
      <form>
        <input 
          label = "Search for a User" 
          placeholder="Search Here" 
          type="text" 
          value={searchText} 
          onChange={(e)=>{
            searchFor(e.target.value)
          }
          }/>
        <button type="submit">Search</button>
        {/* <button onClick={()=>setSearchText("")}>Clear Search</button> */}
      </form>
    )
  }

  const renderUsers = () => {

    return users.map((user) => {
      if (selectedUser !== user) {
        return (
          <>
            {/* /show_user_submissions/:user_id */}
            <div onClick={() => setSelectedUser(user)}>  
              <h1 key={user.id}>{user.first_name} {user.last_name}</h1>
              <img src={user.image} alt="blank profile" style={{ borderRadius: "50%", width: '200px' }} />
            </div>
          </>
        ) 
      } else {
        return (
          <>
            {/* /show_user_submissions/:user_id */}
            <div onClick={() => setSelectedUser(user)}>  
              <h7>SELECTED USER BELOW (I need help highlighting)</h7>
              <h1 key={user.id}>{user.first_name} {user.last_name}</h1>
              <img src={user.image} alt="blank profile" style={{ borderRadius: "50%", width: '200px' }} />
              <h7>SELECTED USER ABOVE (I need help highlighting)</h7>
            </div>
          </>
        )
      }
    })
  }

  return (
    <>
      <h1>Users</h1>
      {searchBar()}
      {renderUsers()}
    </>
  )
}

export default UserSelection;
