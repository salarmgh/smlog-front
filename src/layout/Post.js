import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import Comments from "../containers/Comments";
import CommentForm from "../components/CommentForm";

export default function PostView() {
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
        created_at: "",
        updated_at: ""
    })

    const [comments, setComments] = useState([])

    const { slug } = useParams();
    useEffect(() => {
      fetch(`http://localhost:8000/posts/${slug}/`)
        .then(res => res.json())
        .then((result) => {
          setPost(result);
        })
      fetch(`http://localhost:8000/comments`)
        .then(res => res.json())
        .then((result) => {
          setComments(result.results)
      })
    }, [])

    return (
        <React.Fragment>
            <Post post={post} />
            <hr />
            <Comments comments={comments} />
            <CommentForm />
        </React.Fragment>
    )
}
