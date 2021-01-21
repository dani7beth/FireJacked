import { Form } from "react-bootstrap";
import { useContext } from "../providers/AuthProvider";
import Axios from 'axios';

const UserEditForm = () => {
  // const { user } = useContext(AuthProvider);

  // const [user, setUser] = useState({
  //   first_name: user.first_name,
  //   last_name: user.last_name,
  //   email: user.email,
  //   image: user.image,
  //   about: user.about,
  //   age: user.age,
  //   gender: user.gender,
  //   height: user.height,
  //   weight: user.weight,
  // });

  // const handleSubmit = () => {
  //   Axios
  //   .put(`X /update_user X`)
  //   .then((res) => {
  //     console.log(res.data);
  //     // setUser(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  // const handleChange = () =>{
  //   setUser({...user, [e.target.name]: e.target.value});
  // }
  
  return (
    <h1>hi</h1>
    // <Form>
    //   <Form.Group>
    //     <Form.Label>First Name</Form.Label>
    //     <Form.Control
    //       name="first_name"
    //       type="text"
    //       value={user.first_name}
    //       onChange={handleChange}
    //     />
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control
    //       name="last_name"
    //       type="text"
    //       value={user.last_name}
    //       onChange={handleChange}
    //     />
    //     <Form.Label>Email</Form.Label>
    //     <Form.Control
    //       name="email"
    //       type="email"
    //       value={user.email}
    //       onChange={handleChange}
    //     />
    //     <Form.Label>Image</Form.Label>

    //     <Form.Label>About</Form.Label>
    //     <Form.Control
    //       name="about"
    //       type="text"
    //       value={user.about}
    //       onChange={handleChange}
    //     />
    //     <Form.Label>Age</Form.Label>
    //     <Form.Control
    //       name="age"
    //       type="text"
    //       value={user.age}
    //       onChange={handleChange}
    //     />
    //     <Form.Label>Gender</Form.Label>
    //     <Form.Control
    //       name="gender"
    //       type="text"
    //       value={user.gender}
    //       onChange={handleChange}
    //     />
    //     <Form.Label>Height</Form.Label>
    //     <Form.Control
    //       name="height"
    //       type="text"
    //       value={user.height}
    //       onChange={handleChange}
    //     />
    //     <Form.Label>Weight</Form.Label>
    //     <Form.Control
    //       name="weight"
    //       type="text"
    //       value={user.weight}
    //       onChange={handleChange}
    //     />
    //   </Form.Group>
    // </Form>
  );
};
export default UserEditForm;
