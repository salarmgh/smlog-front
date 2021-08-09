import {Form, Button} from "react-bootstrap";
import styles from "./CommentForm.module.scss";


export default function CommentForm() {
    return (
      <Form className={styles.comment}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="outline-dark">Search</Button>
      </Form>
    )
}
