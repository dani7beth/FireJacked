import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

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
        <Form onSubmit={handleSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button type="submit">login</Button>
          </div>
        </Form>
        <Link to='/admin_login'>Admin Login</Link>
      </div>
    </>
  );
};
export default UserLogin;
