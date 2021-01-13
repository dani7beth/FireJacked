import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const UserLogin = (props) => {
  //init email and password for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456");
  //call the handlelogin function
  const { handleUserLogin } = useContext(AuthContext);

  //handle form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserLogin({ email, password }, props.history);
  };

  return (
    <>
      <div>
        <h1>
          Login
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
        <Link to='/admin-login'>Admin Login</Link>
      </div>
    </>
  );
};
export default UserLogin;
