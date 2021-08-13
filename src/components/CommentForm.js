import { useState } from "react";
import {Form, Button} from "react-bootstrap";
import styles from "./CommentForm.module.scss";


export default function CommentForm(props) {
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
    const [comment, setComment] = useState({
        name: "",
        content: "",
        post: null,
        reply_to: null
    });

    function handleCommentNameChange(event) {
        const cmt = comment;
        cmt.name = event.target.value;
        setComment(cmt)
    }
    function handleCommentContentChange(event) {
        const cmt = comment;
        cmt.content = event.target.value;
        setComment(cmt)
    }
    function sendComment(event) {
        event.preventDefault();
        const cmt = comment;
        cmt.post = props.post;
        cmt.reply_to = props.replyTo;
        fetch(`${backendUrl}/comment/`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(() => window.location.reload(false))
    }

    return (
        <Form className={styles.comment}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نام</Form.Label>
            <Form.Control type="text" placeholder="نام" onChange={handleCommentNameChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>کامنت</Form.Label>
            <Form.Control as="textarea" placeholder="کامنت" rows={3} onChange={handleCommentContentChange}/>
          </Form.Group>
          <Button variant="dark" type="submit" onClick={sendComment}>
            ارسال
          </Button>
        </Form>
    )
}

