import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import {useDropzone} from 'react-dropzone';


export default (props) => {
  //init register values
  const [email, setEmail] = useState("user1@test.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(null);

  const { handleRegister } = useContext(AuthContext);

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (image == null) {
      alert("cant be blank");
      return;
    }
    // let data = new FormData();
    console.log(image);
    if (password === confirmPassword) {
      handleRegister(
        {
          email,
          password,
          confirmPassword,
          first_name,
          last_name,
          age,
          gender,
          weight,
          height,
          about,
        },
        props.history
      );
    } else {
      alert("passwords dont match");
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
  }, []);
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop});
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <h1 as="h1">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <Form.Label>Height</Form.Label>
          <Form.Control
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <Form.Label>About</Form.Label>
          <Form.Control
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <Form.Label>Image</Form.Label>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};