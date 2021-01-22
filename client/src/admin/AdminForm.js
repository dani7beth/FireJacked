import { useState } from "react"
import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthProvider from '../providers/AuthProvider';


// this form is for the Admin's info, and the AdminUpdate.js can be for the cloudinary stuff.
// I'll need to go in a make a new updateFunction in the admins_controller :) and I'll make this a modal

const AdminForm = () => {
  const { admin } = useContext(AuthProvider)

  const [adminInfo, setAdminInfo] = useState({
    first_name: admin.first_name,
    last_name: admin.last_name,
    email: admin.email,
    phone: admin.phone,
    speciality: admin.speciality
  })

  // make axios.put call

  const handleSubmit = () => {
    console.log('updateAdmin')
    //editAdmin();
  }

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
        </Form.Group>
        <Button variant='primary' type="submit">Submit</Button>
      </Form>
      <h1>Update Admin info</h1>
      <h1>Welcome {admin.first_name} {admin.last_name}</h1>
      <p>Your email: {admin.email}</p>
      <p>Your phone number: {admin.phone}</p>
      <p>Your speciality: {admin.speciality}</p>
    </>
  )
}

export default AdminForm;