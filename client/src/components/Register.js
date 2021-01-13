import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  //init register values
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");

  const { handleRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      handleRegister({ email, password }, props.history);
    }else{
      alert("passwords dont match");
    }
  };

  return (
    <>
      <h1 as="h1">Register</h1>
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
        <input
          label="Confirm Password"
          name="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div basic textAlign="center">
          <button type="submit">register</button>
        </div>
      </form>
    </>
  );
};
