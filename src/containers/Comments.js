import React from "react";
import { Card } from "react-bootstrap";
import Replies from "./Replies";
import styles from "./Comments.module.scss";

export default function Comments(props) {
    return (
      <div>
        {
        props.comments.map((comment, index) => {
            return (
                <Card className={styles.comment}>
                  <Card.Body>
                    <Card.Title>{ comment.name }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ comment.created_at }</Card.Subtitle>
                    <Card.Text>
                        { comment.content }
                        <Replies replies={comment.replies} />
                    </Card.Text>
                    <Card.Link href="#">Reply</Card.Link>
                  </Card.Body>
                </Card>
              )
            }
          )
        }
      </div>
    )
}
