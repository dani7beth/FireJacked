import { Form, } from 'react-bootstrap';
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  //init register values
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [speciality, setSpeciality] = useState('');

  const { handleAdminRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      handleAdminRegister({ email, firstName, lastName, phone, speciality, password }, props.history);
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
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          label="First Name"
          name="firstName"
          value={firstName}
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          label="Last Name"
          name="lastName"
          value={lastName}
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          label="Phone Number"
          name="phone"
          value={phone}
          placeholder='Phone'
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          label="Speciality"
          name="speciality"
          value={speciality}
          placeholder='Speciality'
          onChange={(e) => setSpeciality(e.target.value)}
        />
        <input
          label="Password"
          name="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          label="Confirm Password"
          name="confirmpassword"
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          <button type="submit">register</button>
        </div>
      </form>
    </>
  );
};
