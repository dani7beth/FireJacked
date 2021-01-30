import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Link to='/admin_register'>Register</Link>
        <h1>Admin Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Email</Form.Label>
            <Form.Control name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button type="submit">login</Button>
          </div>
        </Form>
      </div>
    </>
  );
}
export default AdminLogin;