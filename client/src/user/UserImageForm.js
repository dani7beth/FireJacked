import { Form } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { useDropzone } from "react-dropzone";

const UserImageForm = () => {
  const { user,onDrop } = useContext(AuthContext);

  // const [user, setUser] = useState({
  //   image: user.image,
  // });

  // const handleChange = () => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };


  const handleSubmit = (e) => {
    e.preventDefault()
    onDrop(acceptedFiles)
    //hide  modal
  }
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ onDrop });
  return (
    <form>
      <p>Update User Picture</p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};
export default UserImageForm;
