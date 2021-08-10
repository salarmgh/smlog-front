import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Replies from "./Replies";
import CommentForm from "../components/CommentForm";
import styles from "./Comments.module.scss";

export default function Comments(props) {
    const [replyIndex, setReplyIndex] = useState(-1);

    function replyHandle(event) {
      event.preventDefault();
      setReplyIndex(event.target.value);
    }

    return (
      <div>
        {
        props.comments.map((comment, index) => {
            return (
                <Card className={styles.comment} key={index}>
                  <Card.Body>
                    <Card.Title>{ comment.name }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ comment.created_at }</Card.Subtitle>
                    <Card.Text>
                        { comment.content }
                    </Card.Text>
                    <Replies replies={comment.replies} />
                    {replyIndex === String(index) ? <CommentForm post={props.post} replyTo={ comment.id } /> : <Button varian="primary" onClick={replyHandle} value={index}>Reply</Button>}
                  </Card.Body>
                </Card>
              )
            }
          )
        }
      </div>
    )
}
