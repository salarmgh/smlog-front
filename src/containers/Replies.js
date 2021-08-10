import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Comments.module.scss";


export default function Replies(props) {
    return (
      <React.Fragment>
        {
          props.replies.map((reply, index) => {
            return (
              <Card className={styles.comment} key={index}>
                <Card.Body>
                  <Card.Title>{ reply.name }</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{ reply.created_at }</Card.Subtitle>
                  <Card.Text>
                      { reply.content }
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
      </React.Fragment>
    )
}
