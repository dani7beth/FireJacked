import { Form } from "react-bootstrap";
import { useContext, useState, useCallback, } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const AdminUpdateImage = ({handleImageHide}) => {
  const { admin, onDropAdmin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(acceptedFiles);
    onDropAdmin(acceptedFiles);
    handleImageHide();
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ onDropAdmin });

  return (
    <Form>
      <p>Update Admin Picture</p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
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

export default AdminUpdateImage;
