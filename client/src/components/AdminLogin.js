import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AdminLogin = (props) =>{

const {handleAdminLogin} = useContext(AuthContext);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    handleAdminLogin({email, password}, props.history);
  }
  return (
    <>
      <div>
        <h1>
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AdminLogin;