import React from "react";


export default function Comments(props) {
    return (
      <div>
        {
        props.comments.map((comment, index) => {
            return (
                <div>
                  <div>
                    <h3>{ comment.title }</h3>
                    <time>{ comment.created_at }</time>
                  </div>
                  <p>{ comment.content }</p>
                </div>
              )
            }
          )
        }
      </div>
    )
}
