import { Form } from "react-bootstrap";
import { useContext } from "../providers/AuthProvider";
import Axios from "axios";
import { useDropzone } from "react-dropzone";

const UserImageForm = () => {
  const { user } = useContext(AuthProvider);

  const [user, setUser] = useState({
    image: user.image,
  });

  const handleSubmit = () => {
    Axios.put(`X /update_user X`)
      .then((res) => {
        console.log(res.data);
        // setUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = () => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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
      <input
        name="video_upload"
        value={submission.video_upload}
        onChange={handleChange}
      />
    </div>
    <aside>
      <h4>Files</h4>
      <ul>{files}</ul>
    </aside>
    <br />
    </form>
  );
};
export default UserImageForm;
