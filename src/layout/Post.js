import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

export default function PostView() {
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
        created_at: "",
        updated_at: ""
    })
    const { slug } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8000/posts/${slug}/`)
          .then(res => res.json())
          .then((result) => {
            setPost(result);
          })
    })
    return (
        <React.Fragment>
            <Post post={post} />
        </React.Fragment>
    )
}
