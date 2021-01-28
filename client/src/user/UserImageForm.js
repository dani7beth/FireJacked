import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const UserImageForm = ({handleImageHide}) => {
  const { user,onDrop } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    onDrop(acceptedFiles)
    handleImageHide();
  }
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ onDrop });
  return (
    <Form>
      <p>Update User Picture</p>
      <div {...getRootProps()}>
        <Form.Control {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};
export default UserImageForm;
