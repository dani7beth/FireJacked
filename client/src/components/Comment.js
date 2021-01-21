import { useState } from "react"
import {Modal, Button} from 'react-bootstrap'


const Comment = ({body, editSingleComment, id, submission_id, removeComment}) => {

  const [editComment, setEditComment] = useState(false)
  const [newBody, setNewBody] = useState(body)
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=(e)=>{
    e.preventDefault()
    editSingleComment(id, {body:newBody, submission_id:submission_id})
    handleEditClose();
  }
  
  // if (editComment){
  //   return(
  //     <div>
  //         <form onSubmit={handleSubmit}>
  //           <input value ={newBody} onChange={(e)=>setNewBody(e.target.value)}/> 
  //         </form>
          
  //     </div>
  //   )}


    

    return(
      <>
        {/* <h4 onClick={()=>setEditComment(!editComment)}>{body}</h4> */}
        {/* <button onClick={()=>removeComment(id)}>Delete</button> */}
        <div>
            <h4>{body}</h4>
             <Button variant="primary" size='sm' onClick={handleEditShow}>
            Edit
          </Button>
          <Modal show={editShow} onHide={handleEditClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                <form onSubmit={handleSubmit}>
                  <textarea value={newBody} onChange={(e)=>setNewBody(e.target.value)}/> 
                  <br />
                  <Button type='submit' variant='primary' size='sm'>submit changes</Button>
                  <Button variant="secondary" size='sm' onClick={handleEditClose}>Go back</Button>
                </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleEditClose}>
                Go back
              </Button>
            </Modal.Footer>
          </Modal>

            <Button variant="danger" size='sm' onClick={handleShow}>
            Delete
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to Delete?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" size='sm' onClick={handleClose}>
                No
              </Button>
              <Button variant="danger" size='sm' onClick={()=> removeComment(id)}>
                Yes, delete.
              </Button>
            </Modal.Footer>
          </Modal>
          <hr />
      </div>
      </>
    )
  
}

export default Comment