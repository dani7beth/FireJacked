import { useCallback, useContext, useState, } from 'react';
import { AuthContext, } from "../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const UpdateAdmin = () => {
  const {admin, setAdmin} = useContext(AuthContext);

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
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name='first_name'
            type='text'
            value={adminInfo.first_name}
            onChange={handleChange}/>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name='last_name'
            type='text'
            value={adminInfo.last_name}
            onChange={handleChange}/>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type='text'
            value={adminInfo.email}
            onChange={handleChange}/>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name='phone'
            type='text'
            value={adminInfo.phone}
            onChange={handleChange}/>
          <Form.Label>Speciality</Form.Label>
          <Form.Control
            name='speciality'
            type='text'
            value={adminInfo.speciality}
            onChange={handleChange} />

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
      </Form>
      <h1>Update Admin info</h1>
      <h1>Welcome {admin.first_name} {admin.last_name}</h1>
      <p>Your email: {admin.email}</p>
      <p>Your phone number: {admin.phone}</p>
      <p>Your speciality: {admin.speciality}</p>
    </>
  );
}

export default UpdateAdmin;
