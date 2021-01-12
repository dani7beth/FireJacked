import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  //init email and password for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("123456");
  //call the handlelogin function
  const { handleLogin } = useContext(AuthContext);

  //handle form submition
  const handleSubmit = () => {
    handleLogin({ email, password }, props.history);
  };

  return (
    <>
      <div>
        <h1 as="h1" textAlign="center">
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
          <div textAlign="center">
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </>
  );
};
