import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import {useDropzone} from 'react-dropzone';



export default (props) => {

  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState(user.id);
  const [password, setPassword] = useState(user.password);
  const [confirmPassword, setConfirmPassword] = useState(user.confirmPassword);
  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [weight, setWeight] = useState(user.weight);
  const [height, setHeight] = useState(user.height);
  const [about, setAbout] = useState(user.about);
  const [image, setImage] = useState(user.image);

  const { handleUserEdit } = useContext(AuthContext);

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
      handleUserEdit(
        // {
        //   email,
        //   password,
        //   confirmPassword,
        //   first_name,
        //   last_name,
        //   age,
        //   gender,
        //   weight,
        //   height,
        //   about,
        // },
        // props.history
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
      <h1 as="h1">Edit</h1>
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
            Submit Changes
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
