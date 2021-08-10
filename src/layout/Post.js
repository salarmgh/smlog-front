import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import Comments from "../containers/Comments";
import CommentForm from "../components/CommentForm";

export default function PostView() {
    const { slug } = useParams();
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
        created_at: "",
        updated_at: ""
    })
    const [comments, setComments] = useState([])

    useEffect(() => {
      fetch(`http://localhost:8000/posts/${slug}/`)
        .then(res => res.json())
        .then((result) => {
          setPost(result);
        })
    }, [slug])
    useEffect(() => {
      post.id && fetch(`http://localhost:8000/comments/${post.id}/`)
        .then(res => res.json())
        .then((result) => {
          setComments(result.results)
      })
    }, [post])

    return (
        <React.Fragment>
            <Post post={post} />
            <hr />
            <Comments post={post.id} comments={comments} />
            <CommentForm post={post.id} />
        </React.Fragment>
    )
}
