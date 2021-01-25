import { useCallback, useContext, useState, } from 'react';
import { AuthContext, } from "../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const AdminUpdateImage = ({handleImageHide}) => {
  const { admin } = useContext(AuthContext);
  const [adminImage, setAdminImage] = useState(admin.image)

  const [adminInfo, setAdminInfo] = useState(
    {
      first_name: admin.first_name,
      last_name: admin.last_name,
      email: admin.email,
      phone: admin.phone,
      speciality: admin.speciality,
      image: admin.image,
    }
  );

  const editAdmin = () => {
    debugger
    if (adminInfo.image == null) {
      alert("can't be blank");
      return;
    }

    let adminData = new FormData();
    adminData.append("image", adminInfo.image);
    adminData.append("first_name", adminInfo.first_name);
    adminData.append("last_name", adminInfo.last_name);
    adminData.append("email", adminInfo.email);
    adminData.append("speciality", adminInfo.speciality);
    adminData.append("phone", adminInfo.phone);
    
    // debugger;
    console.log(adminData)
    console.log('made it here')
    axios
      .put(`/api/update_admin/`, adminData)
      .then((res) => {
        setAdminInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setAdminInfo({...adminInfo, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    editAdmin();
  }
 
  const onDrop = useCallback((acceptedFiles) => {
    setAdminInfo({ image: acceptedFiles[0] });
  }, []);
  
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ onDrop });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <p>Image</p>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            <input name="image" value={adminInfo.image} onChange={handleChange} />
          </div>

          <Form.Label>Image</Form.Label>
          <Form.Control
            name='image'
            type='text'
            value={adminInfo.image}
            onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' type="submit">Submit</Button>
        <Button variant='danger' onClick={handleImageHide} >Close</Button>
      </Form>
    </>
  );
}

export default AdminUpdateImage;
